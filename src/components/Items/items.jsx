import React, { useContext } from "react";
import "./items_module.css";
import { Coleccion } from "./Coleccion/Coleccion";
import { Trending } from "./Trending/Trending";
import { AppContext } from "../../appContext/ContextProvider";

const Items = () => {
  const { modo, dataGif, searchBoton, enviar } = useContext(AppContext);
  return (
    
    <div className="items">
      {dataGif !== [] && enviar === "" ? (
        <>
          <h3
            className={`subtitulo ${modo ? `subtituloLigth` : `subtituloDark`}`} >
            Realiza tu busqueda
          </h3>
          <Trending />
        </>
      ) : dataGif !== [] && searchBoton === true ? (
        <>
          <div className="contenedorCarga">
            <div className="carga"></div>
          </div>
        </>
      ) : (
        <Coleccion />
      )}
    </div>
  );
};

export { Items };
