import React, { useState, useContext } from 'react';
import { Icon } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const [contador, setContador] = useState(0);

    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

    return (
        <Link to="/cart">
            <Icon as={HamburgerIcon} boxSize={6} color="gray.500" />
            <span>{carritoInicial.length}</span>
        </Link>


    )
}


export default CardWidget