import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
     const priceForStripe = price * 100;
     const publishableKey = "pk_test_YXpV5Dm8rG7rmDxLlR9NWhyS00u9QKlt90";

     const onToken = (token) => {
          console.log(token);
          alert("Payment Successful!");
     }
     return (
          <StripeCheckout
          label="Pay Now"
          name="Online Store" 
          billingAddress
          shippingAddress
          image="https://sendeyo.com/up/d/f3eb2117da"
          // image="https://svghare.com/i/CUz.svg"
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken} //onSuccess callback that triggers on sumbittion.
          stripeKey={publishableKey}
          />      
     );
};
export default StripeCheckoutButton;