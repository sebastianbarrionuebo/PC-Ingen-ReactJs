import { useState, useEffect } from "react"
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { firestore } from "./firebase"
import ItemDetail from "./ItemDetail"
import ScreenLoad from "./ScreenLoad"
import "../CSS/itemDetail.css"

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
                <Container className="detail--contenedor">
                    <ItemDetail info={datosProducto} />
                </Container>
                :
                <ScreenLoad/>
            }
        </>
    );
}

export default ItemDetailContainer;