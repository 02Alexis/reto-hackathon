import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Components/Register/Register";
import Perfil from "../Components/Perfil/Perfil";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";



export const AppContext = createContext({});

const AppRouter = () => {
 
  const [usuario, setUsuario] = useState({});
  const [token, setToken] = useState('');



  return (

    <>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            usuario,
            setUsuario,
            token,
            setToken
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>

  );

};

export default AppRouter;
