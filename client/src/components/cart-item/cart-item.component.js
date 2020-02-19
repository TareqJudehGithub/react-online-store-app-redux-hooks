import React from "react";
import {CartItemContainer, ItemDetailsContainer, NameSpan, PriceSpan, CartImage } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
     
     <CartItemContainer>
          <CartImage src={imageUrl} alt="item" />
          <ItemDetailsContainer>
               <NameSpan>
               {name}
               </NameSpan>
               <PriceSpan>
               {quantity}x ${price}
               </PriceSpan>
          </ItemDetailsContainer>         
     </CartItemContainer> 
)
export default CartItem;