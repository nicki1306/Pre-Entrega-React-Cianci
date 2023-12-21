import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import CardWidget from "./components/CardWidget";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
    <ChakraProvider >
    <Navbar/>
    <ItemListContainer greeting="Bienvenido a Fumiko"/>
    <CardWidget/>
    </ChakraProvider>
    </>
  );
}

export default App;


