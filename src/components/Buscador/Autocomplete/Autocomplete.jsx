import React, { useContext } from "react";
import { AppContext } from "../../../appContext/ContextProvider.js";
import lupa from "../../../Imagenes/icon-search.svg";

function Autocomplete({ buscarBoton }) {
  const { modo, automatico, setEnviar } = useContext(AppContext);

  return (
    <div
      onClick={buscarBoton}
      className={`${
        automatico.length > 0
          ? `sugerenciasContainer  ${
              modo ? `sugerenciasContainerLight` : `sugerenciasContainerDark`
            }`
          : ""
      }`}
    >
      {automatico.map((data) => {
        return (
          <div>
            <li
              className={`sugerencia ${
                modo ? `sugerenciaLigth` : `sugerenciaDark`
              }`}
            >
              {data.name}
              {setEnviar(data.name)}
              <img src={lupa} alt="lupa buscar" className="lupaPurpura" />
            </li>
          </div>
        );
      })}
    </div>
  );
}

export { Autocomplete };
