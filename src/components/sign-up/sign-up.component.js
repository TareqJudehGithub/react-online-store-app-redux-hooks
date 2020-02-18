import React, {useState, useEffect, useRef} from "react";
import FormInput from "../form-input/form-input.component"
import {auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button-component";

const Signup = () => {
    
     const [ userCredentials, setUserCredentials ] = useState({ 
               displayName: "",
               email: "",
               password: "",
               confirmPassword: ""
          });

     const { displayName, email, password, confirmPassword } = userCredentials;
          
     const persistDataOverRender = useRef({ willUnmount: false });

     useEffect(() => {
          persistDataOverRender.current.willUnmount = true
     }, []);

     const handleSubmit = async (event) => {
          event.preventDefault();
          if(password !== confirmPassword) {
               alert("password and confirm password does not match");
               return;
          }
          try {
               const { user } = await auth.createUserWithEmailAndPassword(
                    email, password
               );
              
               await createUserProfileDocument(user, {displayName});
               !persistDataOverRender.current.willUnmount &&
               //to clear our form
               setUserCredentials({
                         displayName: "",
                         email: "",
                         password: "",
                         confirmPassword: ""                 
                         })

          } catch (error) {
               console.log(error.message);
          }
     };

     const handleChange = (event) => {
          const { name, value } = event.target;
               setUserCredentials({...userCredentials, [name]: value})
     }
          return(
               <div className="sign-up">
                    <h2 className="title">New user?</h2>
                    <h2>Sign up now!</h2>
                    <form className="sign-up-form"
                    onSubmit={handleSubmit}
                    >
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="confirm Password"
                    required
                    >
                    </FormInput>

                    <CustomButton type="submit">
                    SIGN UP
                    </CustomButton>
                    </form>
               </div>
          )
   
}
export default Signup;