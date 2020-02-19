import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
     const Spinner = ({ isLoading, ...otherProps}) => {

          //if spinner is loading? then render SpinnerContainer (the animation)
          return isLoading
               ?
               (
                    <SpinnerOverlay>
                         <SpinnerContainer />
                    </SpinnerOverlay>
               )
          // when loading finishes, render the component along with its props:
               :
               (
                    
                    <WrappedComponent {...otherProps}/>
               )
     };
     return Spinner;
}
export default WithSpinner;