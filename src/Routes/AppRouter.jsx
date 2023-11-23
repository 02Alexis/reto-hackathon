import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Components/Login/Login"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter