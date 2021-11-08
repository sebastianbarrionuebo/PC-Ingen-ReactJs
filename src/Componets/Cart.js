import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { memo, useContext, useState, useEffect } from "react";
import { contexto } from "./CustomProvider";
import { firestore } from "./firebase"
import firebase from "firebase/app"
import FormularioCompra from "./FormularioCompra"
import "../CSS/cart.css"

const {Body,Text,Footer,Title,} = Card

const Cart = () => {
    const {carrito,borrarProducto,limpiarCarrito} = useContext(contexto)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let tot = 0
        carrito.map((item) => {
            tot = tot + (item.price * item.cantidad);
        })
        setTotal(tot)
    },[carrito])

    function borrar(prop){
        const task = "borrar"
        borrarProducto(prop, task)
    }

    function limpiarProductos() {
        limpiarCarrito()
    }

    const guardarOrden = (buyerData) => {
        const ordenDeCompra = {
            buyer : buyerData,
            item : carrito,
            date : firebase.firestore.Timestamp.now(),
            totalFinal : total
        }
        const colection = firestore.collection("ordenes")
        colection.add(ordenDeCompra)
    }

    return (
        <Container fluid={true}>
            { total ?
                    (<>
                        <div className="cart--container__padding">
                            {carrito.map((item) => {
                                return(
                                    <Row key={item.id} className="card__padding" >
                                        <Card className="card-style bg-secondary ">
                                            <Row>
                                                <Col sm={4} md={4} lg={4}  sm={{order: 'last'}} className="card--img__overflow bg-color text-center pt-4" >
                                                    <img src={item.pictureUrl} style={{ width: '9rem' }} className="card--img__style"  alt="" />
                                                </Col>
                                                <Col sm={8} md={8} lg={8} sm={{order: 'first'}} >
                                                    <Body className=" text-center">
                                                        <Title className="pt-2 pb-3">{item.title}</Title>
                                                        <Text>Has selecionado "{item.cantidad}" unidades de esteproducto </Text>
                                                        <Text className="pt-2 pb-2">Precio: {item.cantidad * item.price}</Text>
                                                    </Body>
                                                    <Footer>
                                                        <Button onClick={()=>{borrar(item.id)}} >Borrar</Button>
                                                    </Footer>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Row>
                                )
                            })}
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
                    </>)
                :
                    (<p className="carritoVacio-style" >Carrito vacio</p>)
            }
        </Container>
    );
}

export default memo(Cart);