import { useState, useEffect } from "react"
import { firestore } from "./firebase"
import ItemList from "./ItemList"
import ScreenLoad from "./ScreenLoad"

const ItemListContainer = () => {

    const [datosProductos, setdatosProductos] = useState(null)

    useEffect(() => {
        const collection = firestore.collection(`Productos`)
        //Hago la consulta. Metodos(get-where-doc-add)
        const query = collection.orderBy("price", "desc").get()
        query
            .then((resultado) => {
                const documentos = resultado.docs
                const array_final_de_productos = []
                documentos.forEach(producto => {
                    const ident = producto.id
                    const el_resto = producto.data()
                    const producto_final = {ident,...el_resto}
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