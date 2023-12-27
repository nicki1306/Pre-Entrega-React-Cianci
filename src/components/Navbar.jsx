import React, {useState} from 'react'
import CardWidget from './CardWidget';
import { Box, Heading, Flex, Link, Spacer, Select } from '@chakra-ui/react'


function Navbar({ onCategoriaChange }) {

    const [categorias, setCategorias] = useState(['Todos', 'Electrónicos', 'Ropa', 'Otras Categorías']);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

    const handleCategoriaChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
        onCategoriaChange(categoria);
    };

    return (

        <Flex className="navbar" as="nav">
            <Heading className="heading" as="h2">Shop Online fumiko</Heading>
            <Link href="/">Home</Link>
            <Link href="/">Sobre Nosotros</Link>
            <Link href="/">Contacto</Link>
            <Link href="/">Cambios y Devoluciones</Link>
            <Spacer />
            <Box className="categorias">
                <Select
                    value={categoriaSeleccionada}
                    onChange={(e) => handleCategoriaChange(e.target.value)}
                >
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </Select>
            </Box>
            <Box className="card">
                <CardWidget />
            </Box>
        </Flex>
    );
}

export default Navbar;