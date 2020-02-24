import React from "react";
import {selectCurrentUser} from "../redux/user/user.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const WelcomeUser = ({ currentUser, children }) => {
     return(
       
     <p> {children}</p>
        
        
     )
}
const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
 });
export default connect(mapStateToProps)(WelcomeUser);
