import { createContext, useState, useEffect } from "react";

export const contexto = createContext()

const {Provider} = contexto

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [numObjetos, setnumObjetos] = useState(0)

    const valorContexto = {
        carrito,
        borrar,
        limpiar,
        total,
        isInCarrito,
        numObjetos
    }

    useEffect(() => {
        let tot = 0
        let num = 0
        carrito.map((item) => {
            tot = tot + item.price;
            num = num + item.cantidad;
        })
        setTotal(total)
        setnumObjetos(numObjetos)
    },[total])

    function isInCarrito(prop) {
        let carrito2 = carrito
        let objBuscado = carrito2.find(c => c.id === prop.id)
        if (objBuscado === undefined) {
            nuevoProducto(prop)
        } else if ( prop.cantidad != carrito2.cantidad) {
                borrar(prop.id)
                nuevoProducto(prop)
            }
    }

    function nuevoProducto(prop){
        const carritoTemp = carrito
        carritoTemp.push(prop)
        setCarrito(carritoTemp)
    }

    function borrar(num) {
        let carritoModifi = carrito
        const objBorrar = carritoModifi.find(c => c.id === num)
        let index = carritoModifi.indexOf(objBorrar)
        carritoModifi.splice(index,1)
        setCarrito(carritoModifi)
    }

    function limpiar() {
        let carritoModifi = carrito
        carritoModifi = []
        setCarrito(carritoModifi)
    }

    return (
        <>
            <Provider value={valorContexto} >
                {children}
            </Provider>
        </>
    );
}

export default CustomProvider;