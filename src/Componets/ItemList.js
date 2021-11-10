import { Container } from "react-bootstrap"
import Item from "./Item"
import "../CSS/Item.css"


const ItemList = (props) => {
    return (
        <Container>
            { props.info.map(producto => (
                    <div className="card--container__padding" key={producto.id}>
                        <Item infoProducto={producto} ></Item>
                    </div>
                )) 
            }
        </Container>
    );
}

export default ItemList;