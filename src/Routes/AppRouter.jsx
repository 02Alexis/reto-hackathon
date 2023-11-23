import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Components/Login/Login"
import Perfil from "../Components/Perfil/Perfil"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Perfil/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter