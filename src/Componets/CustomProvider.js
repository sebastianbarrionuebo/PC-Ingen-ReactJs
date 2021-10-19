import { createContext, useState, useEffect } from "react";

export const contexto = createContext()

const {Provider} = contexto

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [numObjetos, setnumObjetos] = useState(0)

    const valorContexto = {
        carrito,
        borrarProducto,
        limpiarCarrito,
        total,
        nuevoProducto,
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
        let status
        let objBuscado = carrito.find(c => c.id === prop.id)
        if (objBuscado === undefined) {
            status = false
        } else {
            status = true
        }
        return {status,objBuscado}
    }

    function nuevoProducto(prop) {
        let estado = isInCarrito(prop)
        if ( estado.status === true )  {
            if ( estado.objBuscado.cantidad !== prop.cantidad ){
                borrarProducto(estado.objBuscado.cantidad)
                const carritoTemp = carrito
                carritoTemp.push(prop)
                setCarrito(carritoTemp)
            } else {
                alert("El objeto con esta cantidad ya se encuentra en el carrito")
            }
        } else {
            const carritoTemp = carrito
            carritoTemp.push(prop)
            setCarrito(carritoTemp)
        }
    }




    function borrarProducto(num) {
        let carritoModifi = carrito
        const objBorrar = carritoModifi.find(c => c.id === num)
        let index = carritoModifi.indexOf(objBorrar)
        carritoModifi.splice(index,1)
        setCarrito(carritoModifi)
    }

    function limpiarCarrito() {
        setCarrito([])
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