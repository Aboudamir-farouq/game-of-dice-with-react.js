import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const element = document.getElementById("root");

//prendre le controle de l'élément par react
const root = ReactDOM.createRoot(element);



//afficher le composant dans le navigateur
root.render(<App />);