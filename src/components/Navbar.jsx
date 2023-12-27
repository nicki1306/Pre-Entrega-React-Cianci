import React, { useState } from 'react'
import CardWidget from './CardWidget';
import { Box, Heading, Stack, Flex, Link, Spacer, Select } from '@chakra-ui/react'


function Navbar({ onCategoriaChange }) {

    const [categorias, setCategorias] = useState(['Todos', 'Electrónicos', 'Ropa', 'Otras Categorías']);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

    const handleCategoriaChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
        onCategoriaChange(categoria);
    };

    return (
        <Stack className="navbar" direction="row" align="center" as="nav">
            <Box>
                <Heading className="heading" as="h2">
                    Shop Online fumiko
                </Heading>
            </Box>
            <Spacer />
            <Box>
                <Link href="/">Home</Link>
                <Link href="/">Sobre Nosotros</Link>
                <Link href="/">Contacto</Link>
                <Link href="/">Cambios y Devoluciones</Link>
            </Box>
            <Spacer />
            <Box>
                <Select onChange={(e) => onCategoriaChange(e.target.value)}>
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </Select>
            </Box>
            <Box>
                <CardWidget />
            </Box>
        </Stack>
    );
}

export default Navbar;