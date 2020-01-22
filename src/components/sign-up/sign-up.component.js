import React from "react";
import FormInput from "../form-input/form-input.component"
import {auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button-component";

class Signup extends React.Component {
     constructor(){
          super()
          this.state = {
               displayName: "",
               email: "",
               password: "",
               confirmPassword: ""
          }
     }
     handleSubmit = async (event) => {
          event.preventDefault();
          const { displayName, email, password, confirmPassword } = this.state;
          if(password !== confirmPassword) {
               alert("password and confirm password does not match");
               return;
          }
          try {
               const { user } = await auth.createUserWithEmailAndPassword(
                    email, password
               )
               await createUserProfileDocument(user, {displayName});

               //to clear our form
               this.setState({
                         displayName: "",
                         email: "",
                         password: "",
                         confirmPassword: ""                 
                         })

          } catch (error) {
               console.log(error.message);
          }
     };

     handleChange = (event) => {
          const { name, value } = event.target;
          this.setState({[name]: value})
     }

     render() {
          const { displayName, email, password, confirmPassword } = this.state;
          return(
               <div className="sign-up">
                    <h2 className="title">New user?</h2>
                    <h2>Sign up now!</h2>
                    <form className="sign-up-form"
                    onSubmit={this.handleSubmit}
                    >
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="email"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="password"
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
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
}
export default Signup;