import React, {useState, useEffect} from 'react';
//styled component:

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSingOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckOutPage from "./pages/checkout/checkout.component";

//selectors:
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

//redux needed library
import { connect } from "react-redux";
import { CheckUserSession } from "./redux/user/user.actions"

//spinner animation
import withSpinner from ".//components/with-spinner/with-spinner.component";

import './App.css';

const App = ({ checkSession, currentUser }) => {

  const HomePageWithSpinner = withSpinner(HomePage);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
  checkSession();

  setTimeout(() => {
    setIsloading(false);
  }, 500)
  }
,[checkSession]);

    return (
      <div>
        <Header />
          <Switch> 
            <Route exact path="/"
            render={(props) =>
            <HomePageWithSpinner isLoading={isLoading} {...props}/>}/>        
        
            <Route path="/shop" component={ShopPage}/>
            
            <Route path="/checkout" component={CheckOutPage}/>

            <Route exact path="/signin" render={() =>

            currentUser
            ?
            (<Redirect to ="/"/>)
            :
            (<SignInandSingOut />)
            } />
         </Switch>
        
      </div>
    );
  
}
const mapToStateProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});
//187.4
const mapDispatchToProps = (dispatch) => ({
  checkSession: () => dispatch(CheckUserSession())
})

export default connect(mapToStateProps, mapDispatchToProps)(App);
