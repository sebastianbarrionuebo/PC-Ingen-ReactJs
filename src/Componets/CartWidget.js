import { Row, Col } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { contexto } from "./CustomProvider";
import "../CSS/cartWidget.css"

const CartWidget = () => {

    const {carrito} = useContext(contexto)
    const [objCarrito, setObjCarrito] = useState(0)

    useEffect(() => {
        console.log("Objetos carrito")
        console.log(objCarrito)
        let num = 0
        carrito.map((item) => {
            num = num + item.cantidad;
        })
        setObjCarrito(num)
    },[carrito])

    return (
        <> 
            <Row>
                <Col sm={4} >
                    <p className="material-icons color2"> shopping_cart</p>
                </Col>
                <Col sm={4} >
                    <p className="carrito-objetos">({objCarrito})</p>
                </Col>
            </Row>
        </>
    );
}

export default CartWidget;