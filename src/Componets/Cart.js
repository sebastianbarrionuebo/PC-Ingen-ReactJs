import Card from "react-bootstrap/Card"
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import "../CSS/cart.css"

const {Body,Text,Footer,Title,} = Card

const Cart = () => {
    const [carrito, setCarrito] = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        carrito.map((item) => {
            total = total + item.price;
        })
        setTotal(total)
    },[])

    function borrar(num) {
        let carritoModifi = carrito
        const objBorrar = carritoModifi.find(c => c.id === num)
        let index = carritoModifi.indexOf(objBorrar)
        carritoModifi.splice(index,1)
        setCarrito(carritoModifi)
    }

    function limpiar() {
        let carritoModifi = carrito
        carritoModifi = []
        setCarrito(carritoModifi)
    }

    return (
        <>
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
            <Row>
                <Col className="text-center pb-2">
                    <Button onClick={limpiar} >Limpiar carrito</Button>
                </Col>
            </Row>
        </>
    );
}

export default Cart;