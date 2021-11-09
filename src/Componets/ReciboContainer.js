import { Container, Row } from "react-bootstrap"


const ReciboContainer = () => {

    return (
        <>
            <Row>
                <h2>Gracias por su compra!</h2>
            </Row>
            <Row>
                <p>Este es su recibo:</p>
            </Row>
            <Row>
                <p>Nombre: {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Telefono: {props.phone}</p>
                <p>Numero de pedido: </p>
            </Row>
            <Row>
                <input type="button" className="btn btn-primary" value="Finalizar"/>
            </Row>
        </>
    );
}

export default ReciboContainer;