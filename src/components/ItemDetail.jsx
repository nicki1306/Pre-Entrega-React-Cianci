import { useState, useContext } from "react";
import ItemCount from "./ItemCount"
import { toCapital } from "../info/toCapital"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({ item }) => {

    const { carrito, agregaralcarrito } = useContext(CartContext);
    console.log("itemdetail:", agregaralcarrito);

    const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    };

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregaralcarrito(item, cantidad)} }
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail