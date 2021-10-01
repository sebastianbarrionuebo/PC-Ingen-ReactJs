import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Item from "./Item"


const ItemList = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Item 
                            title="Producto 1" 
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                            price={100} 
                            pictureUrl="http://placehold.it/300x200" />
                    </Col>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Item 
                            title="Producto 2"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                            price={200} 
                            pictureUrl="http://placehold.it/300x200" />
                    </Col>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Item 
                            title="Producto 3"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                            price={300} 
                            pictureUrl="http://placehold.it/300x200" />
                    </Col>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Item 
                            title="Producto 4"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                            price={400} 
                            pictureUrl="http://placehold.it/300x200" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemList;