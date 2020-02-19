import React from "react";
import { connect } from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
// import toggleCartHidden from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {CartIconContainer, ShopIconContainer, ItemCountContainer} from "./cart-icon.styles";

const CartIcon = ( { itemCount, history } ) => ( 
     <CartIconContainer
          // onClick={toggleCartHidden}
          onClick={() => history.push(`${"/checkout"}`)}
          >
          <ShopIconContainer/>
          {
               itemCount
               ?
               (
               <ItemCountContainer>     
                    {itemCount}
               </ItemCountContainer>
               )
               :
               (
                   null 
               )
          }
         
     </CartIconContainer>
)
// const mapDispatchToProps = (dispatch) => ({
//      toggleCartHidden: () => dispatch(toggleCartHidden())
// });

const mapStateToProps = createStructuredSelector ({

itemCount: selectCartItemsCount
})
export default withRouter(connect(mapStateToProps)(CartIcon));