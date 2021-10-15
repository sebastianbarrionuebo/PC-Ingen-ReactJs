import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import ScreenLoad from "./ScreenLoad"
import procesadores from "../DataBase/procesadoresAMD.json"

const ItemDetailContainer = () => {

    const [datosProducto, setdatosProducto] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        const pidiendoDatosALaAPI = new Promise((res,rej)=>{
            setTimeout(() => { //Simula pedido a una API
                const producto = procesadores.find(producto => producto.id == id)
                res(producto)
            },2000)
        })
        pidiendoDatosALaAPI.then(producto => setdatosProducto(producto))
    },[id])

    return (
        <>
            {datosProducto ?
                <>
                    <ItemDetail info={datosProducto} />
                </>
                :
                <ScreenLoad/>
            }
        </>
    );
}

export default ItemDetailContainer;