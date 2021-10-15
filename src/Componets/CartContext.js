import React from 'react';
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    return (
        <CartContext.Provider value={[carrito,setCarrito]} >
            {props.children}
        </CartContext.Provider>
    );
}
