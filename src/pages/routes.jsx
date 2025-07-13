import { Route, Routes } from "react-router-dom"
import { Home } from "./home";
import { PokemonPage } from "./pokemon-page";

const AppRoutes = () => (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokedex/:id" element={<PokemonPage />} />            
        </Routes>
);

export { AppRoutes }