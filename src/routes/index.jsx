import { BrowserRouter, Routes, Route } from "react-router-dom";  
import { Home } from "../pages/Home";
import { MovieDatails } from "../pages/MovieDatails";

function AppRoutes() {
   return(
   <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/Details/:id" element={<MovieDatails /> }/>
      </Routes>
   </BrowserRouter>
   )   
}

export default AppRoutes;