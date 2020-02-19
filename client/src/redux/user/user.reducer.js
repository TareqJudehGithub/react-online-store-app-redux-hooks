import {UserActionTypes} from "./user.types";
const INITIAL_STATE = {
     currentUser: null
}
// state = INITIAL_STATE is the default state value.. which is null our example.
const userReducer = (state = INITIAL_STATE, action) =>{ 
     switch(action.type){ 
          case UserActionTypes.SET_CURRENT_USER:  
          return {
               ...state,   
               currentUser: action.payload  
          }
          default:
          return state;       
     }
}
export default userReducer;
