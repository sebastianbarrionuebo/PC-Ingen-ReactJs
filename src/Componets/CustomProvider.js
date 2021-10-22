import { createContext, useState, useEffect, useCallback, useMemo } from "react";

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
            status = 1
        } else {
            if ( objBuscado.cantidad !== prop.cantidad ) {
                status = 2
            } else {
                status = 3
            }
        }
        return {status,objBuscado}
    }

    function nuevoProducto(prop) {
        const carritoTemp = carrito
        let estado = isInCarrito(prop)
        if ( estado.status === 1 ) {
            carritoTemp.push(prop)
            setCarrito(carritoTemp)
        } else {
            if ( estado.status === 2 ) {
                borrarProducto(estado.objBuscado.id)
                carritoTemp.push(prop)
                setCarrito(carritoTemp)
            } else {
                alert("Producto se encuentra en el carrito")
            }
        }
    }

    function borrarProducto(num) {
        let carritoModifi = carrito
        const objBorrar = carritoModifi.find(c => c.id === num)
        if ( objBorrar !== undefined ) {
            let index = carritoModifi.indexOf(objBorrar)
            carritoModifi.splice(index,1)
            setCarrito(carritoModifi)
        }
    }

    //const borrarProductoMemoria = useCallback(borrarProducto,[carrito])
    

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