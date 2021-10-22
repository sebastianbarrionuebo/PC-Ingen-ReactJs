import { useContext, useState } from "react";
import { contexto } from "./CustomProvider";


const CartWidget = () => {

    const {numObjetos} = useContext(contexto)
    const [objCarrito, setObjCarrito] = useState(numObjetos)

    return (
        <>
            <span className="material-icons color2"> shopping_cart ({objCarrito}) </span>
        </>
    );
}

export default CartWidget;