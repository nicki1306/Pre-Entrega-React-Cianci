
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pedirdata } from "../info/Pedirdata"
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        Pedirdata()
            .then((res) => {
                if (categoriaId) {
                    setProductos(res.filter((prod) => prod.categoria === categoriaId));
                } else {
                    setProductos(res);
                }
            })
            .catch((error) => {
                console.error("error al obtener datos", error)
            })
    }, [categoriaId])
    return (
        <div>
            <h1 className="msj">{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

