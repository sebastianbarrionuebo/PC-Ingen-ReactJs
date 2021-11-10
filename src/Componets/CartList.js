import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import CartItem from "./CartItem"
import "../CSS/cart.css";


const CartList = () => {
    const { carrito } = useContext(contexto)

    return (
        <>
            {carrito.map((item) => {
                return(
                    <Row key={item.id} className="card__padding" >
                        <CartItem infoProducto={item} className=" bg-secondary "/>
                    </Row>
                )
            })}
        </>
    );
}

export default CartList;