import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"
import "../CSS/Item.css"


const {Body,Img,Footer,Text,Title,} = Card

const ItemDetail = (props) => {
    return (
        <>
            <Container className="pt-4" >
                <Row>
                    <Col className="justify-content-center" >
                        <Card key={props.info.id} className="bg-secondary">
                            <Body className="card-body_background ">
                                <Img src={props.info.pictureUrl} className="h-30 w-auto"/>
                                <Title>{props.info.title}</Title>
                                <Text>{props.info.description}</Text>
                                <Text>Precio: {props.info.price}</Text>
                            </Body>
                            <Footer className="card-footer_background">
                                <ItemCount stock={5} initial={1} />
                            </Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetail;