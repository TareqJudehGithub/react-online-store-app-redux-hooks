import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {SelectCartItems, selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";


const CheckOutPage = ( { cartItems, total, itemCount }) => {

return (

     <div className="checkout-page">
        <span className="title">Shopping Cart</span>
          <div className="checkout-header">

               <div className="header-block">
                    <span>Products</span>
               </div>
               <div className="header-block">
                    <span>Description</span>
               </div>
               <div className="header-block">
                    <span>Quantity</span>
               </div>
               <div className="header-block">
                    <span>Price</span>
               </div>
               <div className="header-block">
                    <span>Remove</span>
               </div>
          
          </div>
          {
               cartItems.map(cartItem =>
                    (
                    <CheckoutItem 
                    key={cartItem.id}
                    cartItem={cartItem}/>
                    )
               )
          }
          <div className="total">
               <span>
                    {
                         itemCount === 0 && total === 0
                         ?
                         null
                         :
                         itemCount === 1
                         ?
                         `Total (${itemCount} item): $${total}`
                         :
                         `Total (${itemCount} items): $${total}` 
                    }
                                  
                    </span>
          </div>
          
          <div className="btn-pay-now">
               <StripeCheckoutButton price={total}                         
               >
               </StripeCheckoutButton>
          </div>
               
          <div className="test-warning">
              
              <div className="note-header">Kindly use this testing credit card<br/> for making payments:
              </div> 

               <div className="note-body">
                    Card number: 4242 4242 4242 4242 
                    <br />
                    exp: (MM/YY) Any future date
                    <br />
                    CVC: Any 3 digits
               </div>
               
          </div>
          
     </div>
)
 }
const mapStateToProps = createStructuredSelector ({
     cartItems: SelectCartItems,
     total: selectCartTotal,
     itemCount: selectCartItemsCount
});
export default connect(mapStateToProps) (CheckOutPage);