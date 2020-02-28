import React from "react";

import {ReactComponent as Logo} from "../../assets/crown.svg";
//cart
import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {signOutStart} from '../../redux/user/user.actions';
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
import "./header.styles.scss";
const styles={color: "blue", backgroundColor:"yellow"};



const Header = ({ currentUser, hidden, clearMyCart, signOut }) => {

     return(
          
     <HeaderContainer>
          <LogoContainer to="/">
          {/* <NavLink activeStyle={styles} to="/signin">SIGN OUT</NavLink> */}
          <ul>
               <li><Logo/></li>
        
          <li>
          {
            currentUser
            ?
            <p>Hello, {currentUser.displayName}</p>
            :
            null
          }
          </li>
          </ul>
              
          </LogoContainer>
          <OptionsContainer>
               <OptionLink activeStyle={styles} to="/shop">             
                    SHOP               
               </OptionLink>
               {/* <OptionLink>
               {
                    
                    Object.keys(currentUser).map(({ id, displayName }) => (

                         <div key={id}>
                         <span >{displayName}</span>
                         </div>
                    ))
               }
               </OptionLink> */}
             
               {/* <Link className="option" to="/shop">
                CONTACT
               </Link> */}
               {
                    currentUser 
                    ?
                    (  
                         <div>
                              <OptionLink as="div"
                              activeStyle={styles} to="/signin"   
                              onClick={()=>{
                                   signOut();
                                   clearMyCart(SelectCartItems);              
                              }}            
                             >   
                             SIGN OUT
{/*                                
                                    {
                                   <div style={{fontSize:"13px",
                                   textAlign: "center",margin:"0 auto"}}>
                                        <p>Hello, {currentUser.displayName}</p>
                                   </div>              
                                    } */}
                              
                              </OptionLink>
                             
                         </div>
                         
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
}
//setting up redux:

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    
});
const mapDispatchToProps = (dispatch) => ({
     clearMyCart: items => dispatch(clearCart(items)),
     signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
