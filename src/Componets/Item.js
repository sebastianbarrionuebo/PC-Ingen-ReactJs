import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom';
import { memo } from "react";
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title} = Card

const Item = (props) => {
    return (
        <>
            <Card className="bg-secondary" >
                <div className="text-center">
                    <Img src={props.infoProducto.pictureUrl} className="pt-3 pb-3" style={{ width: '11rem' }}/>
                </div>
                <Body className="card-body_background" >
                    <Title className="text-center" >{props.infoProducto.title} </Title>
                    <Text>{props.infoProducto.description} </Text>
                    <Text>Precio: {props.infoProducto.price} </Text>
                </Body>
                <Footer className="card-footer_background">
                    <Row className="p-2">
                        <Col className="text-center">
                            <Link to={`/item/${props.infoProducto.ident}`} className="btn btn-dark" >Mas informacion</Link>
                        </Col>
                    </Row>
                </Footer>
            </Card>
        </>
    );
}

export default memo(Item);