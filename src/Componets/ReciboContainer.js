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
            <Row className="recibo--buyer__padding">
                <p><b>Numero de pedido:</b> {props.recibo}</p>
                <p><b>Nombre:</b> {props.buyer.name} </p>
                <p><b>Email:</b> {props.buyer.email}</p>
                <p><b>Telefono:</b> {props.buyer.phone}</p>
            </Row>
            <Row>
                
            </Row>
        </div>
    );
}

export default ReciboContainer;