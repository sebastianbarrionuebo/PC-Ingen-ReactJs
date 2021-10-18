import { useContext } from "react";
import { contexto } from "./CustomProvider";


const CartWidget = () => {

    const {numObjetos} = useContext(contexto)

    return (
        <>
            <span className="material-icons color2"> shopping_cart ({numObjetos}) </span>
        </>
    );
}

export default CartWidget;