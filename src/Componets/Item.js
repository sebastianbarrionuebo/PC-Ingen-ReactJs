import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom';
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title} = Card

const Item = (props) => {
    return (
        <>
            <Card key={props.infoProducto.id} className="bg-secondary" >
                <Body className="card-body_background" >
                    <Img src={props.infoProducto.pictureUrl} />
                    <Title>{props.infoProducto.title} </Title>
                    <Text>{props.infoProducto.description} </Text>
                    <Text>Precio: {props.infoProducto.price} </Text>
                </Body>
                <Footer className="card-footer_background">
                    <ItemCount stock={5} initial={1} />
                    <Row className="p-2">
                        <Col className="text-center">
                            <Link className="btn btn-dark" to={props.infoProducto.link}>Add</Link>
                        </Col>
                    </Row>
                </Footer>
            </Card>
        </>
    );
}

export default Item;