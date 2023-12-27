import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import ItemDetail from "./components/ItemDetail";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  
  return (
    <BrowserRouter>
    <Navbar />  
    <ItemDetail/>
    <ItemListContainer />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetail />} />
      <Route path="/category/:categoria" element={<ItemListContainer />} />
    </Routes>
  </BrowserRouter>
)
}

export default App;


