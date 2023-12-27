
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pedirdata } from "../info/Pedirdata"
import ItemList from "./ItemList";
import Navbar from "./Navbar";


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        Pedirdata()
            .then((res) => {
                const productosFiltrados = categoriaId
                    ? res.filter((prod) => prod.categoria === categoriaId)
                    : res;
                setProductos(productosFiltrados);
            })
            .catch((error) => {
                console.error("Error al obtener datos", error);
            });
    }, [categoriaId]);
    return (
        <div>
            <h1 className="msj">{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

