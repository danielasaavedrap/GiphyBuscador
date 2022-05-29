import React, {useContext} from "react";
import "../items_module.css";
import {Resultados} from "./Resultados/Resultados";
import {AppContext} from "../../../appContext/ContextProvider.js";

function Coleccion() {
  const { dataGif, enviar, searchBoton, modo } = useContext(AppContext);

  return (
    <div>
     <h3
            className={`subtitulo ${modo ? `subtituloLigth` : `subtituloDark`}`} >
        {`Resultados de la búsqueda:  ${enviar}`}
      </h3>
      {dataGif.length > 0 && enviar !== "" ? (
        renderGifs({ dataGif })
      ) : dataGif !== [] && searchBoton === false ? (
        <h3
            className={`subtitulo ${modo ? `subtituloLigth` : `subtituloDark`}`} >
        No encontramos lo que buscabas ¡Inténtalo de nuevo!
      </h3>
      ) : (
        <></>
      )}
    </div>
  );

  function renderGifs() {

 return (
      <div
         className={`listaItems ${
        modo
          ? `listaItemsLigth`
          : `listaItemsDark`
      }`}
      >
        {dataGif.map((gif) => {
          return <Resultados key={gif.id} {...gif} />;
        })}
      </div>
    );
   
  }
}

export  {Coleccion};
