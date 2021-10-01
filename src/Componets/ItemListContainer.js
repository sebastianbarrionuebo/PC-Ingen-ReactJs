import ItemList from "./ItemList"
//import { useState } from "react"
//import Button from  "react-bootstrap/Button"

const ItemListContainer = () => {


    setTimeout(() => {
        console.log("Pidiendo datos a la API")
    },2000)

    return (
        <>
            <ItemList props="{datosDeLaAPI}" />
        </>
    );
}

export default ItemListContainer;