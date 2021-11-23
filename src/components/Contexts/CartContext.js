import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [myCart, setMyCart] = useState([]);
 
    const addToCart = (product,qtyt) => {
        console.log(product,qtyt,'Producto - Cantidad');
    }
    
    return(
        <CartContext.Provider value={{myCart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;