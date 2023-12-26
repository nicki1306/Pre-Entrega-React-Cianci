import React from 'react';
import { Box, Text, Icon} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons';

const CardWidget = () => {
    const itemCount = 2;

    const mostrarNotificacion = () => {
        alert(`Tienes ${itemCount} productos en tu carrito`);
    };

    return (
        <Box
        className="cart-widget"
        onClick={mostrarNotificacion}
        display="flex"
        alignItems="center"
        cursor="pointer"
    >
        <Icon as={HamburgerIcon} boxSize={6} color="gray.500" />
        {itemCount > 0 && (
            <Box
                className="notification-badge"
                id="notification-badge"
                ml={2}
                borderRadius="full"
                bg="red.500"
                color="white"
                fontSize="sm"
                px={2}
                py={1}
            >
                {itemCount}
            </Box>
        )}
    </Box>
    );
};

export default CardWidget