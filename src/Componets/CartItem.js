import { Row, Col, Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import "../CSS/cart.css";

const {Body,Text,Footer,Title,} = Card

const CartItem = (item) => {
    const { borrarProducto } = useContext(contexto)

    function borrar(prop){
        const task = "borrar"
        borrarProducto(prop, task)
    }

    return (
            <Card className=" bg-secondary ">
                <Row>
                    <Col md={4} lg={4}  sm={{order: 'last'}} className="card--img__overflow bg-color text-center pt-4" >
                        <img src={item.infoProducto.pictureUrl} style={{ width: '9rem' }} className="card--img__style"  alt="" />
                    </Col>
                    <Col md={8} lg={8} sm={{order: 'first'}} >
                        <Body className=" text-center">
                            <Title className="pt-2 pb-3">{item.infoProducto.title}</Title>
                            <Text>Has selecionado "{item.infoProducto.cantidad}" unidades de esteproducto </Text>
                            <Text className="pt-2 pb-2">Precio: {item.infoProducto.cantidad * item.infoProducto.price}</Text>
                        </Body>
                        <Footer>
                            <Button onClick={()=>{borrar(item.infoProducto.id)}} >Borrar</Button>
                        </Footer>
                    </Col>
                </Row>
            </Card>
    );
}

export default CartItem;