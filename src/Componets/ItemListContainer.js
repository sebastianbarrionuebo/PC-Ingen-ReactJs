import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import ScreenLoad from "./ScreenLoad"
import { firestore } from "./firebase"

const ItemListContainer = () => {

    const [datosProductos, setdatosProductos] = useState(null)

    useEffect(() => {
        const collection = firestore.collection("Productos")
        //Hago la consulta. Metodos(get-where-doc-add)
        const query = collection.get()
        query
            .then((resultado) => {
                console.log("Todo esta bien")
                const documentos = resultado.docs
                const array_final_de_productos = []
                documentos.forEach(producto => {
                    const id = producto.id
                    const el_resto = producto.data()
                    const producto_final = {id,...el_resto}
                    array_final_de_productos.push(producto_final)
                });
                setdatosProductos(array_final_de_productos)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    return (
        <>
        {datosProductos ?
            <>
                <div className="item-container_padding">
                    <ItemList info={datosProductos} />
                </div>
            </>
            :
            <ScreenLoad/>
        }
        </>
    );
}

export default ItemListContainer;