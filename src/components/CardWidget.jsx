import React from 'react'
import styled from 'styled-components';

const CardWidget = () => {
    const itemCount = 2;

    const mostrarNotificacion = () => {
        alert(`Tienes ${itemCount} items en tu carrito`);
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

const cartwidget = styled.div`
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
        background-color%;
        display: flex;: rgb(255, 255, 255);
        border-radius: 50
        justify-content: center;
        align-items: center;
        
    }
`

