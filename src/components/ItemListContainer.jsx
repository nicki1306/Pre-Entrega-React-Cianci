import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemListContainer = ({category}) => {

    const [productos, setProductos] = useState([]);
    console.log("Categoría en ItemListContainer:", category);
    const [titulo, setTitulo] = useState("Productos");

    useEffect(() => {
        
        const productosRef = collection(db, "productos");
        const q = category ? query(productosRef, where("categoria", "==", category.toLowerCase())) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
            
    }, [category])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer