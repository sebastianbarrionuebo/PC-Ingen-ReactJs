import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title} = Card

const Item = (props) => {
    return (
        <Card className="bg-secondary" >
            <div className="text-center">
                <Img src={props.infoProducto.pictureUrl} className="pt-3 pb-3" style={{ width: '11rem' }}/>
            </div>
            <Body className="card--body__background" >
                <Title className="text-center" >{props.infoProducto.title}</Title>
                <Text className="text-center" >Precio: {props.infoProducto.price}</Text>
            </Body>
            <Footer className="card--footer__background">
                <Row className="p-2">
                    <Col className="text-center">
                        <Link to={`/item/${props.infoProducto.ident}`} className="btn btn-dark" >Mas informacion</Link>
                    </Col>
                </Row>
            </Footer>
        </Card>
    );
}

export default Item;