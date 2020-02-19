import React from "react";
import CustomButton from "../custom-button/custom-button-component";
import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
//selectors
import {createStructuredSelector} from "reselect";
import {SelectCartItems} from "../../redux/cart/cart.selectors";

//122.
import toggleCartHidden from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (  
     <div className="cart-dropdown">
          <div className="cart-items">
               {
                    //119. CheckOut
                    cartItems.length
                    ?
                    (
                    cartItems.map(cartItem => (
                         <CartItem 
                         key={cartItem.id}
                         item={cartItem} />
                    ))
                    )
                    :
                    <span className="empty-message"> Cart is empty</span>                  
               }
          </div>
          <CustomButton onClick={() => 
              {
               history.push("/checkout")
               dispatch(toggleCartHidden());
               }}>
               CHECKOUT
          </CustomButton>
     </div>
)
const mapStateToProps = createStructuredSelector ({ 
     cartItems: SelectCartItems
});

export default  withRouter(connect(mapStateToProps)(CartDropDown));
