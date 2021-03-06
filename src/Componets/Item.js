import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title} = Card

const Item = (props) => {
    return (
        <Card className="bg-secondary card__style" >
            <Row>
                <Col sm={3} className="text-center card--img__overflow">
                    <Img src={props.infoProducto.pictureUrl} className="pt-3 pb-3 card--img__style" style={{ width: '8rem' }}/>
                </Col>
                <Col sm={9} >
                    <Body className="card--body" >
                        <Title>{props.infoProducto.title}</Title>
                        <Text>Precio: {props.infoProducto.price}</Text>
                    </Body>
                    <Footer className="card--footer">
                        <Link to={`/Store/Item/${props.infoProducto.ident}`} className="btn btn-dark" >Mas informacion</Link>
                    </Footer>
                </Col>
            </Row>
        </Card>
    );
}

export default Item;