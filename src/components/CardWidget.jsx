import React from 'react';
import styled from 'styled-components';
import { Box, Text} from "@chakra-ui/react"

const CardWidget = () => {
    const itemCount = 2;

    const mostrarNotificacion = () => {
        alert(`Tienes ${itemCount} productos en tu carrito`);
    };

    return (
        <div className="cart-widget" onClick={mostrarNotificacion}>
            <div className="carticon">
            </div>
            {itemCount > 0 && (
                <div className="notification-badge" id="notification-badge">
                    {itemCount}
                </div>
            )}
        </div>
    );
};

export default CardWidget

const CartWidget = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    carticon {
        width: 30px;
        height: 30px; 
        background-color: rgb(255, 255, 255);
        display: flex;
        border-radius: 50
        justify-content: center;
        align-items: center;
        
    }
`

