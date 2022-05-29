import React, {useContext} from "react";
import "./head_module.css";
import { AppContext } from "../../appContext/ContextProvider";
import logoLight from "../../Imagenes/logo-desktop.svg";
import logoDark from "../../Imagenes/logo-mobile-modo-noct.svg";


function Head() {
  const { modo, setModo  } = useContext(AppContext);


  const cambioEstado = () => {
    setModo(!modo);
  };
  
  return (
    <div className="header">
      <img
        src={modo ? logoLight : logoDark}
        alt="logo"
        className="logo"
      />
      
      <button
        value={modo}
        onClick={() => cambioEstado()}
        className={`boton ${modo ? `botonLight` : `botonDark`}`}
      >
        {modo ? "MODO DARK" : "MODO LIGTH"}
      </button>
    </div>
  );
}

export { Head };
