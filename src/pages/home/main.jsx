import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Turismo from "./Turismo.jsx";
import Gastronomia from "./Gastronomia.jsx";
import Reserva from "./Reserva.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Turismo />
    <Gastronomia />
    <Reserva />
  </React.StrictMode>
);
