import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import './App.css';
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
  },
]);

const rootElement = document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
