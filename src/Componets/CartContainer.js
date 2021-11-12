import { Row, Col, Button } from "react-bootstrap";
import { memo, useContext, useState, useEffect } from "react";
import { contexto } from "./CustomProvider";
import { firestore } from "./firebase";
import firebase from "firebase/app";
import FormularioCompra from "./FormularioCompra";
import ReciboContainer from "./ReciboContainer";
import CartList from "./CartList";
import "../CSS/cart.css";

const Cart = () => {
    const {carrito, limpiarCarrito} = useContext(contexto)
    const [estadoDeCompra, setEstadoDeCompra] = useState(true)
    const [ordenDeCompra, setOrdenDeCompra] = useState({})
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let tot = 0
        carrito.forEach((item) => {
            tot = tot + (item.price * item.cantidad);
        })
        setTotal(tot)
    },[carrito])

    function limpiarProductos() {
        limpiarCarrito()
    }

    const guardarOrden = (event, buyerData) => {
        const ordenCompra = {
            buyer : buyerData,
            item : carrito,
            date : firebase.firestore.Timestamp.now(),
            totalFinal : total
        }
        const colection = firestore.collection("Ordenes")
        colection.add(ordenCompra)
            .then((docRef) => {
                const recibo = docRef.id
                const carrito_final = {recibo,...ordenCompra}
                setOrdenDeCompra(carrito_final)
                setEstadoDeCompra(false)
            })
            .catch((error) => {
                console.error("Error agregando datos: ", error)
            })
        event.preventDefault();
    }

    return (
        <>
            { total ?
                    (<>
                        { estadoDeCompra ?
                            <>
                                <div className="cart--container__padding">
                                    <CartList />
                                </div>
                                <Row className="total--container__padding">
                                    <Col sm={3}>
                                    </Col>
                                    <Col sm={3} className="text-center pb-2">
                                        <Button onClick={limpiarProductos} >Limpiar carrito</Button>
                                    </Col>
                                    <Col sm={3} className="text-center pb-2">
                                        <h2 className=" text-center">Total: ${total} </h2>
                                    </Col>
                                    <Col sm={3}>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <div className="cart--form__container">
                                        <FormularioCompra orden={guardarOrden} />
                                    </div>
                                </Row>
                            </>
                            :
                            <div>
                                <ReciboContainer props={ordenDeCompra} />
                            </div>
                        }
                    </>)
                :
                    (<p className="carritoVacio-style" >Carrito vacio</p>)
            }
        </>
    );
}

export default memo(Cart);