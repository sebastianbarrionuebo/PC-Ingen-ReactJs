import { Container, Row } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import "../CSS/formularioCompra.css"


const FormularioCompra = ({orden}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()

    const enviarPedido = (event) => {
        console.log("Se envia formulario")
        const buyerData = { name, email, phone }
        orden(event, buyerData)
    }

    return (
        <>
            <h2>Rellene los campos para finalizar la compra</h2>
            <form onSubmit={enviarPedido}>
                <Container>
                    <Row className="pb-3 pt-3" >
                        <div className="form--centrado">
                            <input id="name" className="form--text__width form--style" type="text" name="Nombre" placeholder="Ingrese su Nombre" onChange={(e) => setName(e.target.value)} required/>
                        </div>
                    </Row>
                    <Row className="pb-3 pt-3" >
                        <div className="form--centrado">
                            <input id="email" className="form--text__width form--style" type="text" name="Email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                    </Row>
                    <Row className="pb-3 pt-3" >
                        <div className="form--centrado">
                            <input id="phone" className="form--phone__width form--style" type="number" name="Telefono" placeholder="Ingrese su telefono" onChange={(e) => setPhone(e.target.value)} required/>
                        </div>
                    </Row>
                    <Row className="pb-3 pt-3" >
                        <div className="button--centrado">
                            <input type="submit" className="btn btn-primary">Realizar pedido</input>
                        </div>
                    </Row>
                </Container>
            </form>
        </>
    );
}

export default FormularioCompra;