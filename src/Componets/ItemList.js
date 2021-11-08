import { Container } from "react-bootstrap"
import Item from "./Item"
import "../CSS/Item.css"


const ItemList = (props) => {
    return (
        <Container>
            { props.info.map(producto => (
                    <div className="pt-3 pl-5 pr-5" key={producto.id}>
                        <Item infoProducto={producto} ></Item>
                    </div>
                )) 
            }
        </Container>
    );
}

export default ItemList;