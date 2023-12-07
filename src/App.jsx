import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import CardWidget from "./components/CardWidget";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenido a Fumiko"/>
    <CardWidget/>
    </>
  );
}

export default App;


