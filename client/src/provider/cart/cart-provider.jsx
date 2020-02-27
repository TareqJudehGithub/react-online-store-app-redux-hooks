import React,{createContext, useState, useEffect} from "react";
import { addItemToCart, removeItemFromCart, filterItemFromCart,
          getCartItemsCount, getCartItemTotal } from "./cart.until";

export const CartContext = createContext({
     cartItems: [],
     addItem: () => {},
     removeItem: () => {},
     clearItemFromCart: () => {},
     cartItemsCount: 0,
     cartItemsTotal: 0
});

const CartProvider = ({ children }) => {

     const [cartItems, setCartItems] = useState([]);
     const [cartItemsCount, setCartItemsCount] = useState(0);
     const [cartItemsTotal, setCartItemTotal] = useState(0);
     const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
     const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
     const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item));
     
     //Cart items count:
     useEffect(() => {
          setCartItemsCount(getCartItemsCount(cartItems));
     }, [cartItems]);

     //Cart Total:
     useEffect(() => {
          setCartItemTotal(getCartItemTotal(cartItems));
     }, [cartItems]);
     return(
          <CartContext.Provider
          value={{
               cartItems,
               addItem,
               removeItem,
               clearItemFromCart,
               cartItemsCount,
               cartItemsTotal
          }}>
               {children}
          </CartContext.Provider>
     )  
}
export default CartProvider;