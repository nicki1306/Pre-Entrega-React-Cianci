import { useState, useContext } from "react";
import ItemCount from "./ItemCount"
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "./AddItemButton";
import { toCapital } from "../info/toCapital"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({ item }) => {

    const { carrito, agregaralcarrito } = useContext(CartContext);


    const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    };

    return (
        <div className="container">
            <img src={item.imagen} alt={item.titulo} />
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <Description descripcion={item.descripcion} />
                    <p className="categoria">Categoria: {toCapital(item.categoria)}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemQuantitySelector
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                    />
                    <AddItemButton
                        agregaralcarrito={() => agregaralcarrito(item, cantidad)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail