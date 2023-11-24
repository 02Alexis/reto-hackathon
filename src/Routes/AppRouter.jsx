import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
