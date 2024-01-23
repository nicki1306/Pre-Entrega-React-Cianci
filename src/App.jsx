import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Cart from "../src/components/Cart";
import Checkout from "./components/Checkout"
import { CartProvider } from "./context/CartContext"



const App = () => {

  const [categoryValue, setCategoryValue] = useState('');
  const handleCategoriaChange = (value) => {
    setCategoryValue(value);
  };

  const carritoInicial = []
  

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar onCategoryChange={handleCategoriaChange} />
        <Routes>
          <Route exact path="/" element={<ItemListContainer category={categoryValue} />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
</CartProvider>
  )
}

export default App;


