import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { firestore } from "./firebase"
import ItemList from "./ItemList"
import ScreenLoad from "./ScreenLoad"
import "../CSS/Item.css"

const ItemListContainer = () => {
    const [datosProductos, setdatosProductos] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const query = firestore.collection(`Productos`)
        if (id) {
            const queryWhere = query.where(`category`, `==`, `${id}`)
            getItems(queryWhere)
        } else { 
            getItems(query)
            }
        function getItems(query) {
            query.get()
                .then((resultado) => {
                    const documentos = resultado.docs
                    const array_final_de_productos = []
                    documentos.forEach(producto => {
                        const ident = producto.id
                        const el_resto = producto.data()
                        const producto_final = {ident,...el_resto}
                        array_final_de_productos.push(producto_final)
                    })
                    setdatosProductos(array_final_de_productos)
                })
                .catch((error) => {
                    console.log("Error obteniendo documentos: ", error)
                })
        }
    },[id])

    return (
        <>
            {datosProductos ?
                    <ItemList info={datosProductos} />
                :
                    <ScreenLoad/>
            }
        </>
    );
}

export default ItemListContainer;