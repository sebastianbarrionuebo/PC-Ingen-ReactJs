import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { firestore } from "./firebase"
import ItemDetail from "./ItemDetail"
import ScreenLoad from "./ScreenLoad"

const ItemDetailContainer = () => {

    const [datosProducto, setdatosProducto] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const collection = firestore.collection("Productos")
        const query = collection.doc(id).get()
        query
            .then((doc) => {
                const producto = doc.data()
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