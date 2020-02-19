export const addItemToCart = (cartItems, cartItemToAdd) => {
     
     const existingCartItem = cartItems.find(cartItem =>
          
          cartItem.id === cartItemToAdd.id
          );
    
     if(existingCartItem) {
          return cartItems.map(cartItem =>                 
                    cartItem.id === cartItemToAdd.id
                    ?
                    //if the item to be added is already in the cart:
                    {...cartItem, quantity: cartItem.quantity +1 }
                    :
                    cartItem
          )        
     }
     else{
          //if the item is will be added to cart for the 1st time:
          return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
     }
     
     
};
//checkout-item arrows:  (remove)
export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItem = cartItems.find(cartItem =>
     cartItem.id === cartItemsToRemove.id)
     
     //if the quantity is 1, then remove it:
     if (existingCartItem.quantity === 1){
          return cartItems.filter(cartItem =>

          //keep rest of cart items in the array:
               cartItem.id !== cartItemsToRemove.id)
     }
     //if the quantity > 1:
     else{
          return cartItems.map(cartItem =>
              
               cartItem.id === cartItemsToRemove.id
               ?
               {...cartItem, quantity: cartItem.quantity - 1 }
               :
               cartItem
               )
     }
}
