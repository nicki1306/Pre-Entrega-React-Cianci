import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <>
            <Navcontainer>
                <h2>Navbar <span>fumiko</span></h2>
                <div>
                    <a href="">Home</a>
                    <a href="">Sobre Nosotros</a>
                    <a href="">Contacto</a>
                    <a href="">cambios y devoluciones</a>
                </div>
            </Navcontainer>
        </>
    )
}

export default Navbar

const Navcontainer = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: 700;
    }
}
padding: 1rem;
background-color: #333;
display: flex;
align-items: center;
justrify-content: space-between; 
`