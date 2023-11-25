import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Components/Login/Login"
import Perfil from "../Components/Perfil/Perfil"
import Register from "../Components/Register/Register";
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
