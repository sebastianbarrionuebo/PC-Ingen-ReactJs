import ItemList from "./ItemList"
//import { useState } from "react"
import Button from  "react-bootstrap/Button"

const ItemListContainer = () => {


    let timer = setTimeout(() => {
        <ItemList />
    },2000)

    return (
        <>
            <Button onClick={timer}>Tienda</Button>
        </>
    );
}

export default ItemListContainer;