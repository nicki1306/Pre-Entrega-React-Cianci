import {useEffect, useState} from 'react'
import {coleccion, getDocs, getFirestore} from 'firebase/firestore'

const coleccion = () => {
    const [productos, setproductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = coleccion(db, 'items')
        getDocs(itemsCollection).then((snapshot) => {
            setproductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    })
    return (
        <div>
            {
                productos.map((producto) => {
                    return <Item key={producto.id} producto={producto} />
                })
            }
            </div>
    )
}

export default coleccion