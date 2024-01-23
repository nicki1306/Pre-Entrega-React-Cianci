import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { CartContext } from '../context/CartContext'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { id } = useParams()
    const { agregaralcarrito } = useContext(CartContext)



    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                );
            })

    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} agregaralcarrito={agregaralcarrito} />}
        </div>
    )
}

export default ItemDetailContainer