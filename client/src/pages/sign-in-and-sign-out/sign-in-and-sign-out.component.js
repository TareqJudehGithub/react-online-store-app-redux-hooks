import React from "react";
import Signin from "../../components/sign-in/sign-in.component.js";
import "./sign-in-and-sign-out.styles.scss";
import SignUp from '../../components/sign-up/sign-up.component';

const SignInandSingOut = () => (
     <div className="sign-in-and-sign-out">
          <Signin/>
          <SignUp/>
     </div>
)
export default SignInandSingOut;