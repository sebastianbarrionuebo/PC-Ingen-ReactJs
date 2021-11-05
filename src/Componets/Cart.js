import { Row, Col, Button, Card } from "react-bootstrap";
import { memo, useContext, useState, useEffect } from "react";
import { contexto } from "./CustomProvider";
import { firestore } from "./firebase"
import { Link } from 'react-router-dom';
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

    function guardarOrden() {
        const ordenDeCompra = {
            buyer : {
                name : "Seba",
                phone : "123124235",
                email : "asdasd"
            },
            item : carrito,
            //date : firestore.timestamp.now(),
            totalFinal : total
        }
        const colection = firestore.collection("ordenes")
        colection.add(ordenDeCompra)
    }

    return (
        <>
            { total ?
                    (<div className="cart-container" >
                        {carrito.map((item) => {
                            return(
                                <div className="card-padding" >
                                    <Card key={item.id} className="card-style bg-secondary ">
                                        <Row>
                                            <Col sm={4} md={4} lg={4}  sm={{order: 'last'}} className="card-img-overflow bg-color text-center pt-4" >
                                                <img src={item.pictureUrl} style={{ width: '9rem' }} className="card-img-style"  alt="" />
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
                                </div>
                            )
                        })}
                        <h2 className=" text-center">Total: {total} </h2>
                        <Row className="text-center">
                            <Col className="text-center pb-2">
                                <Button onClick={limpiarProductos} >Limpiar carrito</Button>
                            </Col>
                            <Col>
                                <Button onClick={guardarOrden} >Finalizar compra</Button>
                                <Link to="/Formulario" >Finalizar compra</Link>
                            </Col>
                        </Row>
                    </div>)
                :
                    (<p className="carritoVacio-style" >Carrito vacio</p>)
            }
        </>
    );
}

export default memo(Cart);