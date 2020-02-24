import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";
import {useState} from "react";
//184. 185(emailSignInStart)
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

import "./sign-in.styles.scss";

const Signin = ({ emailSignInStart, googleSignINStart}) => {

     const [userCredentials, setuserCredentials] = useState({
          email: "user@email.com",
          password: "pass123"})
                    
     const { email, password } = userCredentials;

     const handleSumbit = async (event) => {
          event.preventDefault();
        
         
          emailSignInStart(email, password)

     }
     const handleChange = (event) => {
          const { value, name } =event.target;
          setuserCredentials({ ...userCredentials,[name]: value})
     }

     return (
          <div className="sign-in">
               <h2 className="title">ALREADY HAVE AN ACCOUNT?</h2>
               <h2>SIGN IN</h2>

               <form
               onSubmit={handleSumbit}>

                    <FormInput 
                    name="email"
                    type="email"
                    // placeholder="example@email.com" 
                    value={email}
                    onChangeProp={handleChange}
                    label="email"
                    required
                    />
               
                    <FormInput
                    name="password"
                    type="password"
                    // placeholder="enter password"
                    value={password}
                    onChangeProp={handleChange}
                    label="password"
                    required
                    />
                    <div className="buttons">
                    <CustomButton 
                    type="submit"
                    >Sign in</CustomButton>

                    <CustomButton
                    //184
                    type="button"
                    // onClick={signInWithGoogle}
                    onClick={googleSignINStart}
                     isGoogleSignin>
                    Sign in with Google</CustomButton>
                    </div>
                    
               </form>
     </div>
          )
     
}
//184 + 185
const mapDispatchToProps = (dispatch) => ({
     googleSignINStart: () => dispatch(googleSignInStart()),
     
     emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)(Signin);
