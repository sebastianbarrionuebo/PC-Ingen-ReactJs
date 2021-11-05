import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { firestore } from "./firebase"
import ItemList from "./ItemList"
import ScreenLoad from "./ScreenLoad"

const Procesadores = () => {

    const [datosProcesadores, setdatosProcesadores] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const collection = firestore.collection(`Productos`)
        //Hago la consulta. Metodos(get-where-doc-add)
        const procesadoresQuery = collection.where(`category`, `==`, `${id}`)
        procesadoresQuery.get()
            .then((resultado) => {
                const documentos = resultado.docs
                const array_final_de_productos = []
                documentos.forEach(producto => {
                    const id = producto.id
                    const el_resto = producto.data()
                    const producto_final = {id,...el_resto}
                    array_final_de_productos.push(producto_final)
                });
                setdatosProcesadores(array_final_de_productos)
            })
            .catch((error) => {
                console.log("Error obteniendo documentos: ", error)
            })
    },[])

    return (
        <>
            {datosProcesadores ?
                <>
                    <div className="item-container_padding">
                        <ItemList info={datosProcesadores} />
                    </div>
                </>
                :
                <ScreenLoad/>
            }
        </>
    );
}

export default Procesadores;