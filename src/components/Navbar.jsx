import React from 'react'
import CardWidget from './CardWidget';
import { Box, Heading, Text, Flex, Link, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'


function Navbar() {
    return (
    
        <Flex className="navbar"  as="nav">
            <Heading className="heading" as="h2">Shop Online fumiko</Heading>
                <Link href="/">Home</Link>
                <Link href="/">Sobre Nosotros</Link>
                <Link href="/">Contacto</Link>
                <Link href="/">Cambios y Devoluciones</Link>
            <Box className="card">
                <CardWidget />
            </Box>
        </Flex>
    );
}

export default Navbar;