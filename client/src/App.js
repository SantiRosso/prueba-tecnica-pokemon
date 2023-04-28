import React from "react";
import { Route, Routes } from "react-router-dom";
//styles
import "./App.css";
//components
import Home from "./components/views/home/Home";
import Create from "./components/views/create/Create";
import Update from "./components/views/update/Update";
import PokemonDetail from "./components/views/pokemonDetail/PokemonDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
