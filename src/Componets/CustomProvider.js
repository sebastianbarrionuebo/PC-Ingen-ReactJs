import { createContext, useState } from "react";
export const contexto = createContext()

const {Provider} = contexto

const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const valorContexto = {
        carrito,
        borrarProducto,
        limpiarCarrito,
        nuevoProducto
    }

    function isInCarrito(prop) {
        let status
        let objEnCarrito = carrito.find(c => c.id === prop.id)
        if (objEnCarrito === undefined) {
            status = 1
        } else {
            if ( objEnCarrito.cantidad !== prop.cantidad ) {
                status = 2
            } else {
                status = 3
            }
        }
        return {status,objEnCarrito}
    }

    function nuevoProducto(prop) {
        const carritoTemp = [...carrito]
        let estado = isInCarrito(prop)
        if ( estado.status === 1 ) {
            carritoTemp.push(prop)
            setCarrito(carritoTemp)
        } else {
            if ( estado.status === 2 ) {
                const task = "agregar"
                const carritoConObjBorrado = borrarProducto(estado.objEnCarrito.id, task)
                carritoConObjBorrado.push(prop)
                setCarrito(carritoConObjBorrado)
            } else {
                alert("Producto se encuentra en el carrito")
            }
        }
    }

    function borrarProducto(num,task) {
        let carritoModifi = [...carrito]
        const objBorrar = carritoModifi.find(c => c.id === num)
        let index = carritoModifi.indexOf(objBorrar)
        carritoModifi.splice(index,1)
        if ( task === "borrar" ) {
            setCarrito(carritoModifi)
        } else {
            if ( task === "agregar" ) {
                return(carritoModifi)
            }
        }
    }

    function limpiarCarrito() {
        setCarrito([])
    }

    return (
            <Provider value={valorContexto} >
                {children}
            </Provider>
    );
}

export default CustomProvider;