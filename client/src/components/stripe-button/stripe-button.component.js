import React from "react";
import StripeCheckout from "react-stripe-checkout";

import {connect} from "react-redux";
import {clearCart} from "../../redux/cart/cart.actions";
import {SelectCartItems} from "../../redux/cart/cart.selectors"

//210
import axios from "axios"; 


const StripeCheckoutButton = ({ price, clearCartAfterPay }) => {
     const priceForStripe = price * 100;
     const publishableKey = "pk_test_YXpV5Dm8rG7rmDxLlR9NWhyS00u9QKlt90";

     const onToken = (token) => {
     //210.2
          axios({
               url: "payment",  //the route name we set up in server.js
               method: "post",
               data: {         //the data we are trying to pass through
                    amount: priceForStripe,
                    token: token
               }
                        
          }) //if the payment was successful:
          .then(response => {
               alert("Payment Successful!")
               onclick= clearCartAfterPay(SelectCartItems)
          })
          .catch(error => {
               console.log("Payment error: ", JSON.parse(error));
               alert(
                    `Payment failed!
                     There was an issue with the payment.
                     Please check the provided credit card details.`);
          });
         
     }
     return (
          <StripeCheckout
          label="Place your order"
          name="React App Online Store"
          billingAddress
          shippingAddress
          // image="https://sendeyo.com/up/d/f3eb2117da"
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Place your order"
          token={onToken} //onSuccess callback that triggers on submition.
          stripeKey={publishableKey}   
          />      
     );
};
const mapDispatchToProps = (dispatch) => ({
     clearCartAfterPay: items => dispatch(clearCart(items))
})
export default connect(null, mapDispatchToProps)(StripeCheckoutButton);