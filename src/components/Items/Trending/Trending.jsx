import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../appContext/ContextProvider";
import "../items_module.css";
import axios from "axios";

const Trending = () => {
  const {
    modo,
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    currentPage,
    itemsPage,
  } = useContext(AppContext);

  const lastItem = currentPage * itemsPage;
  const firstItem = lastItem - itemsPage;

  const currentItems = data.slice(firstItem, lastItem);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "hva03XroKMuBdVozbu5c1vIz4uJk0KF9",
            limit: 15,
          },
        });
        setData(results.data.data);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    if (loading && error) {
      return (
        <h3
          className={`subtitulo ${modo ? `subtituloLigth` : `subtituloDark`}`}
        >
          Hay un error
        </h3>
      );
    }
    return currentItems.map((element) => {
      return (
        <div>
          <a href={element.images.fixed_height.url}>
            <img
              key={element.id}
              alt={`imagen ${element.title} `}
              className="imgGif"
              src={element.images.fixed_height.url}
            />
          </a>
        </div>
      );
    });
  };

  return (
    <div
      className={`listaItems ${
        modo
          ? `listaItemsLigth`
          : `listaItemsDark`
      }`}
    >
      {renderGifs()}
    </div>
  );
};

export { Trending };
