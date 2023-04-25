import React from "react";
import { Route, Routes } from "react-router-dom";
//styles
import "./App.css";
//components
import Home from "./components/views/home/Home";
import Create from "./components/views/create/Create";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
