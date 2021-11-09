import { Row } from "react-bootstrap"
import "../CSS/reciboContainer.css"


const ReciboContainer = ({props}) => {

    return (
        <div className="recibo--container__style">
            <Row>
                <h2 className="pt-2 pb-2">Gracias por su compra!</h2>
            </Row>
            <Row>
                <p className="pt-2 pb-2">Este es su recibo:</p>
            </Row>
            <Row>
                <p>Nombre: {props.buyer.name} </p>
                <p>Email: {props.buyer.email}</p>
                <p>Telefono: {props.buyer.phone}</p>
                <p>Numero de pedido: {props.recibo}</p>
            </Row>
            <Row>
                
            </Row>
        </div>
    );
}

export default ReciboContainer;