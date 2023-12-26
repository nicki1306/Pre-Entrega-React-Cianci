
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pedirdata } from "../info/Pedirdata"
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {

    const [Productos, setProductos] = useState([])
    const {categoria} = useParams()

    useEffect(() => {
        Pedirdata()
            .then((res) => {
                if (categoria){
                    setProductos(res.filter( (prod) => prod.categoria === categoria) );
                }else{
                    setProductos(res);
                }
            })
            .catch((error) => {
                console.error("error al obtener datos", error)
            })
    },[categoria]  )
    return (
        <div>
            <h1 className="msj">{greeting}</h1>
            <ItemList productos={Productos} />
        </div>
    )
}

export default ItemListContainer

