
import React, { useEffect, useState } from "react";
import { Pedirdata } from "../info/Pedirdata"
import ItemList from "./ItemList";



const ItemListContainer = ({ greeting, category }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        Pedirdata()
            .then((res) => {
                const productosFiltrados = category
                    ? res.filter((prod) => prod.categoria === category)
                    : res;
                setProductos(productosFiltrados);
            })
            .catch((error) => {
                console.error("Error al obtener datos", error);
            });
    }, [category]);
    return (
        <div>
            <h1 className="msj">{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

