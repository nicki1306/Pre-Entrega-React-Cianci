import React from 'react'
import CardWidget from './CardWidget';
import bootstrap from 'styled-components';


function Navbar() {
    return (
        <>
            <Navcontainer>
                <h2>Shop Online fumiko</h2>
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="/">Sobre Nosotros</a>
                    <a href="/">Contacto</a>
                    <a href="/">cambios y devoluciones</a>
                </div>
                <div className='card'> 
                <CardWidget/>
                </div>
            </Navcontainer>
        </>
    )
}

export default Navbar

const Navcontainer = bootstrap.div`
position: fixed;
width: 100%;
height: 60px;
top: 0;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justrify-content: space-between;


h2{
    color: white;
    font-weight: 400;
    font-size: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: all .5s ease;
}

links{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1rem; 
    color: white
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    text-align: center;
    background-color: white;
    padding: 1rem;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);
    transition: all .5s ease;
}
a{
    color: white;
    font-weight: 200;
    font-family: sans-serif;
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    transition: all .5s ease;
    cursor: pointer;

}
card{
    margin-right: 1rem;
    border-radius: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: all .5s ease;
    background-color: pink;


}
`
