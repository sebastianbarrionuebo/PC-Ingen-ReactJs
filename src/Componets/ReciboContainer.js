import { Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import { firestore } from "./firebase"


const ReciboContainer = ({props}) => {
    const [data, setData] = useState({})

    console.log(props.buyer)
    console.log(props.item)
    console.log(props.date)

    useEffect(() => {
        const collection = firestore.collection(`ordenes`)
        const query = collection.where(`buyer`, `==`, `${props.buyer}`)
        query.where(`item`, `==`, `${props.item}`)
        query.where(`date`, `==`, `${props.date}`)
        query.where(`totalFinal`, `==`, `${props.totalFinal}`)
        query.get()
            .then((resultado) => {
                const documentos = resultado.docs
                const array_final_de_productos = []
                console.log("dentro del llamado")
                documentos.forEach(producto => {
                    const ident = producto.id
                    const el_resto = producto.data()
                    const producto_final = {ident,...el_resto}
                    console.log("Este es el id")
                    console.log(producto_final)
                    array_final_de_productos = producto_final
                })
                setData(array_final_de_productos)
            })
            .catch((error) => {
                console.log("Error obteniendo documentos: ", error)
            })
    },[props])

    return (
        <div className="text-center">
            <Row>
                <h2>Gracias por su compra!</h2>
            </Row>
            <Row>
                <p>Este es su recibo:</p>
            </Row>
            <Row>
                <p>Nombre: </p>
                <p>Email: </p>
                <p>Telefono: </p>
                <p>Numero de pedido: </p>
            </Row>
            <Row>
                
            </Row>
        </div>
    );
}

export default ReciboContainer;