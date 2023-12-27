import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirItemPorId } from '../info/Pedirdata'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { id } = useParams()

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
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer