import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const {categoria}  = useParams();

    useEffect(() => {
        
        const productosRef = collection(db, "productos");
    
        const categoriaFilter = categoria
        const q = categoria ? query(productosRef, categoriaFilter, where("categoria", "==", categoria.toLowerCase())) : productosRef;
        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
            
    }, [categoria])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer