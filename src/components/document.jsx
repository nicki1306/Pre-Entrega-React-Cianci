import React from 'react'
import { useState, useEffect } from 'react'
import { doc, getDocs, getFirestore } from 'firebase/firestore'

const document = () => {
    const [productos, setproductos] = useState([])

    useEffect( ()=> {
        const db = getFirestore()
        const itemsCollection = doc(db, 'items')
        getDocs(itemsCollection).then((snapshot) => {
            setproductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    })


    return (
        <div>Producto:{productos.nombre}
        <h1>{productos.precio}</h1>

        </div>
    )
}

export default document