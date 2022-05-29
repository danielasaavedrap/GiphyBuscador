import React, { useContext } from "react";
import "./buscador_module.css";
import { Autocomplete } from "./Autocomplete/Autocomplete";
import { AppContext } from "../../appContext/ContextProvider";
import imagenBuscador from "../../Imagenes/ilustra_header.svg";
import lupa from "../../Imagenes/icon-search-mod-noc.svg";

function Buscador() {
  const {
    modo,
    searchValue,
    dataGif,
    setSearchValue,
    setSearchBoton,
    setEnviar,
  } = useContext(AppContext);

  const busqueda = (e) => {
    const busqueda = e.target.value;
    setSearchValue(busqueda);
  };

  const buscarBoton = (e) => {
    e.preventDefault();
    setSearchBoton(true);
    setEnviar(searchValue);
  };

  return (
    <div className="buscador">
      <h1 className={`titulo ${modo ? `tituloLigth` : `tituloDark`}`}>
        ¡Inspirate y busca los mejores <span>GIFTS!</span>
      </h1>
      <div className="Buscar">
        <img src={imagenBuscador} alt="lustracion" className="ilustracion" />
        <form onSubmit={buscarBoton}>
          <div className="inputBoton">
            <input
              type="text"
              placeholder=" Buscar Gif"
              className={`inputTexto ${
                modo ? `inputTextoLigth` : `inputTextoDark`
              }`}
              onChange={busqueda}
              value={searchValue}
            />
            <button className={`botonBuscar ${
                modo ? `botonBuscarLight` : `botonBuscarDark`
              }`}>
              <img src={lupa} alt="buscar" className="lupaBlanca"/>
            </button>
          </div>
          {searchValue === "" ? (
            <></>
          ) : dataGif.length >= 0 && searchValue !== "" ? (
            <Autocomplete buscarBoton={buscarBoton} />
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}

export { Buscador };
