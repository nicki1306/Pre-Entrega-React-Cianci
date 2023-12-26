import React from "react"
import Item from "./Item"

const ItemList = ({ productos }) => {

    const boton = () =>{
    }
    return (
    <div>
        <button onClick={boton}>Productos</button>

        
        <div>
            {productos.map((prod, index) => {
                <Item producto={prod} key={index}/>
            } )}
        </div>
    </div>
    )
}


export default ItemList;
