import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"
import Athom from "../Assets/Athom.png"
import Ryzen3 from "../Assets/Ryzen3.png"
import Ryzen5 from "../Assets/Ryzen5.png"
import Ryzen7 from "../Assets/Ryzen7.png"
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title,} = Card

const ItemDetail = (props) => {

    const cantidadProductos = (cantidad) => {
        //console.log(cantidad)
        //console.log(props.info)
    }




    return (
        <>
            <Container className="pt-4" >
                <Row>
                    <Col fluid="true">
                        <Card key={props.info.id} className="bg-secondary">
                            <Body className="imagen">
                                <Img src={props.info.pictureUrl} className="h-auto w-3"/>
                                <Title className="pt-4 pb-4">{props.info.title}</Title>
                                <Text>{props.info.description}</Text>
                                <Text>Precio: {props.info.price}</Text>
                            </Body>
                            <Footer className="card-footer_background">
                                <ItemCount stock={props.info.stock} initial={1} add={cantidadProductos} />
                            </Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetail;