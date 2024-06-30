import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    const removeFromCart = async (cartItemId) => {
      setCart(cart.filter((item) => item._id !== cartItemId));
    };

    return (
      <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
      </CartContext.Provider>
    )
};

export default CartProvider;