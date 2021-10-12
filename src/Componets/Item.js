import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom';
import "../CSS/Item.css"
import Athom from "../Assets/Athom.png"

const {Body,Img,Footer,Text,Title} = Card

const Item = (props) => {
    return (
        <>
            <Card className="bg-secondary" >
                <Body className="card-body_background" >
                    <Img src={`${props.infoProducto.pictureUrl}`} />
                    <Title className="text-center" >{props.infoProducto.title} </Title>
                    <Text>{props.infoProducto.description} </Text>
                    <Text>Precio: {props.infoProducto.price} </Text>
                </Body>
                <Footer className="card-footer_background">
                    <Row className="p-2">
                        <Col className="text-center">
                            <Link to={`/item/${props.infoProducto.to}`} className="btn btn-dark" >Mas informacion</Link>
                        </Col>
                    </Row>
                </Footer>
            </Card>
        </>
    );
}

export default Item;