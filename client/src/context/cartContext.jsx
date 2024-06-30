import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    return (
      <CartContext.Provider value={{cart, addToCart}}>
        {children}
      </CartContext.Provider>
    )
};

export default CartProvider;