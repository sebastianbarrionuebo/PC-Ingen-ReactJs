import { Row, Col } from "react-bootstrap"
import Item from "./Item"
import "../CSS/Item.css"


const ItemList = (props) => {
    return (
        <Row>
            { props.info.map(producto => (
                    <Col sm={6} md={4} lg={3} className="pt-3" key={producto.id}>
                        <Item infoProducto={producto} ></Item>
                    </Col>
                )) 
            }
        </Row>
    );
}

export default ItemList;