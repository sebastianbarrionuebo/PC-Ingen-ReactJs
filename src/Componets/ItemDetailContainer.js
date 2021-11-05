import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import ScreenLoad from "./ScreenLoad"
import { firestore } from "./firebase"

const ItemDetailContainer = () => {

    const [datosProducto, setdatosProducto] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const collection = firestore.collection("Productos")
        const query = collection.get()
        query
            .then((resultado) => {
                const documentos = resultado.docs
                const array_final_de_productos = []
                documentos.forEach(producto => {
                    const id = producto.id
                    const el_resto = producto.data()
                    const producto_final = {id,...el_resto}
                    array_final_de_productos.push(producto_final)
                });
                const producto = array_final_de_productos.find(producto => producto.to === id)
                setdatosProducto(producto)
            })
            .catch((error) => {
                console.log(error)
            })
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