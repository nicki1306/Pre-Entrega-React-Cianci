import React from "react";

const AddItemButton = ({ agregaralcarrito }) => {
    return (
        <button className="agregar-al-carrito" onClick={agregaralcarrito}>
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;
