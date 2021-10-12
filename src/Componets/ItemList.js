import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Item from "./Item"


const ItemList = (props) => {
    return (
        <>
            <Container>
                <Row>
                    { props.info.map(producto => (
                            <Col sm={6} md={4} lg={3} className="pt-3" key={producto.id}>
                                <Item infoProducto={producto} ></Item>
                            </Col>
                        )) 
                    }
                </Row>
            </Container>
        </>
    );
}

export default ItemList;