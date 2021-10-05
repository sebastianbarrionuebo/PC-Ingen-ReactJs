import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Item from "./Item"


const ItemList = (props) => {
    return (
        <>
            <Container>
                <Row>
                    { props.map((producto,i) => {
                        return (
                            <Col sm={6} md={4} lg={3} className="pt-3">
                                <Item
                                    title={producto.title}
                                    description={producto.description}
                                    price={producto.price}
                                    pictureUrl={producto.pictureUrl}
                                ></Item>
                            </Col>)
                        }) 
                    }
                </Row>
            </Container>
        </>
    );
}

export default ItemList;