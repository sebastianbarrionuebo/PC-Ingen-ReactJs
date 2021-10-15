import Card from "react-bootstrap/Card"
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const {Body,Img,Text,Footer,Title,} = Card

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

    /*
    function borrar(id) {
        let carritoModifi = carrito;
        carritoModifi.spice(id, 1);
        setTotal(carritoModifi);
    }
    */

    return (
        <>
            {carrito.map((item) => {
                return(
                    <>
                        <Card key={item.id} className="bg-secondary">
                            <Row>
                                <Col sm={4} md={4} lg={4}  sm={{order: 'last'}}  >
                                    <Img src={item.pictureUrl} style={{ width: '11rem' }}/>
                                </Col>
                                <Col sm={8} md={8} lg={8} sm={{order: 'first'}} >
                                    <Body className="imagen">
                                        <Title className="pt-4 pb-4 text-center">{item.title}</Title>
                                        <Text className="pt-4 pb-4 text-center">Precio: {item.price}</Text>
                                    </Body>
                                    <Footer>
                                        {/*<Button onClick={()=>{borrar(item.id)}} >Borrar</Button>*/}
                                    </Footer>
                                </Col>
                            </Row>
                        </Card>
                    </>
                )
            })}
            <h2>Total: {total} </h2>
        </>
    );
}

export default Cart;