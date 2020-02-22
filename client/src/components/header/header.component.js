import React from "react";

import { auth } from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from "../../assets/crown.svg";
//cart
import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropDown from "../cart-dropdown/cart-dropdown.component";

//redux needed library.
import {connect} from "react-redux";

//selectors
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {SelectCartItems} from "../../redux/cart/cart.selectors";
import {clearCart} from "../../redux/cart/cart.actions";

import {withRouter, Redirect} from "react-router-dom";

//styles components:
import {HeaderContainer, LogoContainer, OptionsContainer,
OptionLink} from "./header.styles";

const styles={color: "blue", backgroundColor:"yellow"};


const Header = ({ currentUser, hidden, clearMyCart }) => (

     <HeaderContainer>
          <LogoContainer to="/">
          {/* <NavLink activeStyle={styles} to="/signin">SIGN OUT</NavLink> */}
               <Logo />
          </LogoContainer>
          <OptionsContainer>
               <OptionLink activeStyle={styles} to="/shop">             
                    SHOP               
               </OptionLink>
               {/* <Link className="option" to="/shop">
                CONTACT
               </Link> */}
               {
                    currentUser 
                    ?
                    (  
                         <OptionLink as="div"
                              activeStyle={styles} to="/signin"   
                              onClick={
                              ()=>{auth.signOut();
                              clearMyCart(SelectCartItems);              
                              }
                              }            
                             >   
                            SIGN OUT                 
                         </OptionLink>
                    )
                    :
                    (
                         <div>
                               <OptionLink
                                   activeStyle={styles} to="/signin">
                                   SIGN IN
                              </OptionLink>
                              <Redirect to="/"/>
                         </div>
                        
                    )     
               }
               <CartIcon>
                   
               </CartIcon>
          </OptionsContainer>
          {/* {
               hidden
               ?
               null
               :
               <CartDropDown />
          } */}
     </HeaderContainer>
     
)

//setting up redux:

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
const mapDispatchToProps = (dispatch) => ({
     clearMyCart: items => dispatch(clearCart(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
