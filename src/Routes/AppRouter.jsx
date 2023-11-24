import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Components/Login/Login"
import Register from "../Components/Register/Register"



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/registro" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter