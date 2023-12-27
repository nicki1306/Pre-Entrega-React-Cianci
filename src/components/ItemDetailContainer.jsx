import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pedirdata } from '../info/Pedirdata'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        Pedirdata(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer