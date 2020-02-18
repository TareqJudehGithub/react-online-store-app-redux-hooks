import React, {useState, useRef, useEffect} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";
import  {signInWithGoogle, auth} from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const Signin = () => {
    
          const [userCredentials, setUserCredentials ] = useState({
               email: "",
               password: ""
          });
          const persistDataOverRender = useRef({ willUnmount: false});
          const { email, password } = userCredentials;
 
          useEffect(() => {
               persistDataOverRender.current.willUnmount = true;
          }, []);

     const handleSumbit = async (event) => {
          event.preventDefault();
          try {
               await auth.signInWithEmailAndPassword(email, password);
               !persistDataOverRender.current.willUnmount &&
               setUserCredentials({ //clears the Sign In form
                    email: "",
                    password: ""    
               });

          } catch (error) {
               console.log(error);
          }

     }
     const handleChange = (event) => {
          const { value, name } =event.target;
          setUserCredentials({...userCredentials, [name]: value})
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
                    onClick={signInWithGoogle}
                     isGoogleSignin>
                    Sign in with Google</CustomButton>
                    </div>
                    
               </form>
     </div>
          )
     
}
export default Signin;
