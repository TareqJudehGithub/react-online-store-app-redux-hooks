import CartActionTypes from "./cart.types";

export const addItem = (item) => ({
     type: CartActionTypes.ADD_ITEM,
     payload: item
})
//125. quantity arrows functions in checkout-item

export const removeItem = (item) => ({
     type: CartActionTypes.REMOVE_ITEM,
     payload: item
});

const toggleCartHidden = () => ({
     type: CartActionTypes.TOGGLE_CART_HIDDEN
      
});
export default toggleCartHidden;


export const clearItemFromCart = (item) => ({
     type: CartActionTypes.CLEAR_ITEM_FROM_CART,
     payload: item
});

