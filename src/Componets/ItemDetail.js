import { Card, Row, Col } from "react-bootstrap"
import { memo, useContext } from "react"
import { contexto } from "./CustomProvider";
import ItemCount from "./ItemCount"
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title,} = Card

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
        <div className="detail-contenedor" >
            <Card key={props.info.id} className="bg-secondary">
                <Row>
                    <Col sm={4} md={4} lg={4} className="pt-4" sm={{order: 'last'}}  >
                        <Img src={props.info.pictureUrl}/>
                    </Col>
                    <Col sm={8} md={8} lg={8} sm={{order: 'first'}} >
                        <Body className="imagen">
                            <Title className="pt-4 pb-4 text-center">{props.info.title}</Title>
                            <Text>{props.info.description}</Text>
                            <Text className="pt-4 pb-4 text-center">Precio: {props.info.price}</Text>
                        </Body>
                    </Col>
                </Row>
                <Footer className="card-footer_background">
                    <ItemCount stock={props.info.stock} initial={1} add={cantidadProductos} />
                </Footer>
            </Card>
        </div>
    );
}

export default memo(ItemDetail);