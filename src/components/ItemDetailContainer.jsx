import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { pedirItemPorId } from '../info/Pedirdata'
import ItemDetail from './ItemDetail'
import { CartContext } from '../context/CartContext'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { id } = useParams()
    const {agregaralcarrito} = useContext(CartContext)


    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} agregaralcarrito={agregaralcarrito} />}
        </div>
    )
}

export default ItemDetailContainer