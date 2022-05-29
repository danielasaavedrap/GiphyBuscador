import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modo, setModo] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchBoton, setSearchBoton] = useState(false);
  const [dataGif, setDataGif] = useState([]);
  const [enviar, setEnviar] = useState("");
  const [automatico, setAutomatico] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(25);

  return (
    <AppContext.Provider
      value={{
        modo,
        setModo,
        searchValue,
        setSearchValue,
        searchBoton,
        setSearchBoton,
        dataGif,
        setDataGif,
        enviar,
        setEnviar,
        automatico,
        setAutomatico,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        currentPage,
        setCurrentPage,
        itemsPage,
        setItemsPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
