import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Components/Register/Register";
import Perfil from "../Components/Perfil/Perfil";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
