import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </ChakraProvider>
)