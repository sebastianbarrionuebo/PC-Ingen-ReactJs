import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {
    //Este array simula ser los datos de una API
    const datosDeLaAPI  =   [{id: 1, name:"Producto 1"},
                            {id: 1, name:"Producto 1"},
                            {id: 1, name:"Producto 1"},
                            {id: 1, name:"Producto 1"}]


    const [datosAPI, setdatosAPI] = useState(null)
    
    useEffect(
        setTimeout(() => {
            console.log("Pidiendo datos a la API")
            setdatosAPI(datosDeLaAPI)
        },2000)
    ,[])


    return (
        <>
            <ItemList props={datosAPI} />
        </>
    );
}

export default ItemListContainer;