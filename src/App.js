import "./styles.css";
import React, { useContext, useEffect } from "react";
import { Buscador } from "./components/Buscador/buscador";
import { Head } from "./components/Head/head.jsx";
import { Items } from "./components/Items/items";
import { AppContext } from "./appContext/ContextProvider";

function App() {
  const {
    modo,
    searchValue,
    setSearchValue,
    searchBoton,
    setSearchBoton,
    setDataGif,
    setAutomatico
  } = useContext(AppContext);

  useEffect(() => {
    if (searchBoton === true) {
      let key = "hva03XroKMuBdVozbu5c1vIz4uJk0KF9";
      let urlSearch = "https://api.giphy.com/v1/gifs/search";
      let petision = fetch(
        `${urlSearch}?api_key=${key}&q=${searchValue}&limit=15&offset=0&rating=g&lang=en`
      );
      petision
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchBoton(false);
          setSearchValue("");
          setDataGif(data.data);
        });
    }
  }, [searchBoton, searchValue]);
  useEffect(() => {
    let key = "hva03XroKMuBdVozbu5c1vIz4uJk0KF9";
    let petision = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${searchValue}&limit=5&offset=0&rating=g&lang=en`
    );
    petision
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAutomatico(data.data);
      });
  }, [searchValue]);

  return (
    <div className={`All ${modo ? `light` : `dark`}`}>
      <div className={`App ${modo ? `light` : `dark`}`}>
        <Head />
        <Buscador />
        <Items />
      </div>
    </div>
  );
}

export default App;
