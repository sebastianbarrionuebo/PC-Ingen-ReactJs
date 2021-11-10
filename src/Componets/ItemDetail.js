import { Card, Row, Col } from "react-bootstrap"
import { memo, useContext } from "react"
import { contexto } from "./CustomProvider";
import ItemCount from "./ItemCount"
import ItemCarousel from "./ItemCarousel"
import "../CSS/itemDetail.css"

const { Body, Footer, Text, Title } = Card

const ItemDetail = (props) => {
    const {nuevoProducto} = useContext(contexto)

    const cantidadProductos = (cantidad) => {
        const productoElegido = {
            id:props.info.id,
            title:props.info.title,
            price:props.info.price,
            pictureUrl:props.info.pictureUrl,
            category:props.info.category,
            cantidad:cantidad
        }
        nuevoProducto(productoElegido)
    }

    return (
        <Card key={props.info.id} className="bg-secondary card--container__style">
            <Row>
                <Col sm={{order: 'last'}} md={4} lg={4} className="pt-4">
                    <ItemCarousel props={props.info.pictureUrl}/>
                </Col>
                <Col sm={{order: 'first'}} md={8} lg={8}>
                    <Body>
                        <Title className="pt-4 pb-4 text-center">{props.info.title}</Title>
                        <Text>{props.info.description}</Text>
                        <Text className="pt-4 pb-4 text-center">Precio: {props.info.price}</Text>
                    </Body>
                </Col>
            </Row>
            <Footer className="card--footer__background">
                <ItemCount stock={props.info.stock} initial={1} add={cantidadProductos} />
            </Footer>
        </Card>
    );
}

export default memo(ItemDetail);