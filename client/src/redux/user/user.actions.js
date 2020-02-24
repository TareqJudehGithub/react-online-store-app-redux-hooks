//actions that starts the sign in:

import UserActionTypes from "./user.types";

//trigers the actual sign in

//google sign in:
export const googleSignInStart = () => ({
     type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({

     type: UserActionTypes.SIGN_IN_SUCCESS,
     payload: user
});
export const signInFailure = (error) => ({

     type: UserActionTypes.SIGN_IN_FAILURE,
     payload: error
});
//Email sign in:
export const emailSignInStart = (emailAndPassword) => ({
     type: UserActionTypes.EMAIL_SIGN_IN_START,
     payload: emailAndPassword
});
//187.2
export const CheckUserSession = () => ({
     type: UserActionTypes.CHECK_USER_SESSION
});

//188.2
 export const signOutStart = () => ({
      type: UserActionTypes.SIGN_OUT_START
 });
 export const signOutSuccess = () => ({
     type: UserActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = (error) => ({
     type: UserActionTypes.SIGN_OUT_FAILURE,
     payload: error
})
//190.2
export const signUpStart = (userCredentials) => ({
     type: UserActionTypes.SIGN_UP_START,
     payload: userCredentials
});
export const signUpSuccess = ({ user, additionalData }) => ({
     type: UserActionTypes.SIGN_UP_SUCCESS,
     payload: { user, additionalData }
});
export const signUpFailure = (error) => ({
     type: UserActionTypes.SIGN_UP_FAILURE,
     payload: error
});