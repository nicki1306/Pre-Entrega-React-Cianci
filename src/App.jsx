import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailcontainer";
import Cart from "./components/cart";


const App = () => {
  
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryid" element={<ItemListContainer />} />
      <Route path="/producto/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
)
}

export default App;


