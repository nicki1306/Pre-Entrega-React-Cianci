import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
