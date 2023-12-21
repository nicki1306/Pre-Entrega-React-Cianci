import React from "react";
import styled from "styled-components";


const ItemListContainer = ({ greeting }) => {

    return (
        <div className="itemList">
            <h1 className="mensaje">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer

const ItemList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;
list-style: none;
gap: 20px;
margin-bottom: 20px;

mensaje {
        font-size: 30px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        color: "pink";
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }
}
`
