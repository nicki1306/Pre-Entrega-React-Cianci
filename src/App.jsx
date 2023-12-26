import React from "react";
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import CardWidget from "./components/CardWidget";
import ItemDetail from "./components/ItemDetail";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
      <ChakraProvider >
        <Navbar />
        <ItemListContainer greeting="Bienvenido a Fumiko" />
        <ItemDetail />
      </ChakraProvider>
    </>
  );
}

export default App;


