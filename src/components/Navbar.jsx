import React, { useState } from 'react'
import CardWidget from './CardWidget';
import { Box, Heading, Stack, Link, Spacer, Select } from '@chakra-ui/react'


function Navbar({ onCategoryChange }) {

    const [categorias, setCategorias] = useState(['Todos', 'Buzos', 'Remeras', 'Medias', 'Pantalones']);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

    const handleCategoriaChange = (categoria) => {
        if (categoria === 'Todos') categoria =''
        onCategoryChange(categoria);
        console.log("categorias", categoria)

        setCategoriaSeleccionada(categoria);
    };

    return (
        <Stack className="navbar" direction="row" align="center" as="nav">
            <Box>
                <Heading className="heading" as="h2">
                    Shop Online fumiko
                </Heading>
            </Box>
            <Spacer />
            <Box className='links'>
                <Link href="/">Home</Link>
                <Link href="/">Sobre Nosotros</Link>
                <Link href="/">Contacto</Link>
                <Link href="/">Cambios y Devoluciones</Link>
            </Box>
            <Spacer />
            <Box>
                <Select  placeholder='Categorias' bg="black" borderColor="white"
                value={categoriaSeleccionada}
                onChange={(e) => handleCategoriaChange(e.target.value)}>
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