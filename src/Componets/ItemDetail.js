import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"
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
                            <Row>
                                <Col sm={4} md={4} lg={4}  sm={{order: 'last'}}  >
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetail;