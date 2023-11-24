import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "../Components/Login/Login"
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
