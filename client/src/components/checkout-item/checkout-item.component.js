import React from "react";
// import "./checkout-item.styles.scss";
//124. we need to bind our new action to the component here:
import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";
import {CheckoutContainer, ImageContainer, SpanStyle, Arrow,
         Quantity,Value, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, increaseQuantity, decreaseQuantity }) => {
     const { name, imageUrl, price, quantity } = cartItem;
     return (
             //passing the whole item
               <CheckoutContainer>
                    <ImageContainer>
                         <img src={imageUrl} alt="item"/>
                    </ImageContainer>
                    <SpanStyle>{name}</SpanStyle>
                    <Quantity>

                    {/* quantity arrows   */}
                         <Arrow
                         onClick={() => decreaseQuantity(cartItem)}>
                              &#8826;
                         </Arrow>

                         <Value>{quantity}</Value>

                         <Arrow
                         onClick={() => increaseQuantity(cartItem)}>
                              &#8827;
                         </Arrow>
                    </Quantity>

                    <SpanStyle>${price}</SpanStyle>
                    <RemoveButton
                    onClick={() => clearItem(cartItem)}> &#10008;
                    </RemoveButton>
               </CheckoutContainer>       
     )
}
const mapDispatchToProps = (dispatch) => ({
     clearItem: item => dispatch(clearItemFromCart(item)),
     increaseQuantity: item => dispatch(addItem(item)),
     decreaseQuantity: item => dispatch(removeItem(item))
})
 export default connect(null, mapDispatchToProps)(CheckoutItem);
 