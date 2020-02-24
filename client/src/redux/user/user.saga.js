//184
import {takeLatest, put, all, call} from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
     auth, 
     googleProvider, 
     createUserProfileDocument,
     getCurrentUser
} from "../../firebase/firebase.utils";
import {
     signInSuccess,
     signInFailure, 
     signOutSuccess, 
     signOutFailure,
     signUpSuccess,
     signUpFailure
      }
 from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) { //190.3 additionalData 
     try {   
          const userRef= yield call(
          createUserProfileDocument, 
          userAuth, 
          additionalData
          ); //190.3 additionalData 
          const userSnapshot = yield userRef.get();
          yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
     } catch (error) {
          yield put(signInFailure("SignIn Failure: "+error));
     };
};

export function* signInWithGoogle() {
     try {
          const {user} = yield auth.signInWithPopup(googleProvider);
          yield getSnapshotFromUserAuth(user);
     } catch (error) {
          yield put("Google SignIn Failure: "+ signInFailure(error));
     };
};

export function* onGoogleSignInStart() {
     yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,
     signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }){
     try {
          const { user } = yield auth.signInWithEmailAndPassword(email, password);
          yield getSnapshotFromUserAuth(user); 
          alert("Welcome User!")
     } catch (error) {
          put(signInFailure("Email SignIn Failure: "+ error))
     }
}
export function* onEmailSignInStart() {
     yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,
     signInWithEmail)
}

//187.6
export function* isUserAthenticated(){
try {
     const userAuth = yield getCurrentUser();
     if(!userAuth){
          return;
     }
     else{
          yield getSnapshotFromUserAuth(userAuth);
     }
} catch (error) {
     yield put(signInFailure("isUserAthenticated Failure: "+ error));
};

}
export function* onCheckUsersSession() {
     yield takeLatest(UserActionTypes.CHECK_USER_SESSION,
     isUserAthenticated)
}
//188.7
export function* signOut(){
     try {
          yield auth.signOut();
          yield put(signOutSuccess());
          alert("Good Bye!")
     } catch (error) {
          yield put(signOutFailure("signOut Failure: "+ error));
     }
};
export function* onSignOutStart(){
     yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

//190.3
export function* signUp({payload: { email, password, displayName }}){
     try {
          const { user } = yield auth.createUserWithEmailAndPassword(
             email,
             password  
          );
          yield put(signUpSuccess({user, additionalData: { displayName } }));
     } catch (error) {
          yield put(signUpFailure("signUp Failure: "+ error))
     }
}

export function* onSignUpStart() {
     yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

export function* signInAfterSignUp({payload: { user, additionalData } }) {
     yield getSnapshotFromUserAuth(user, additionalData);
};

export function* onSignUpSuccess() {
     yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
};


export function* userSagas(){
     yield all([
          call(onGoogleSignInStart),
          call(onEmailSignInStart),
          call(onCheckUsersSession),
          call(onSignOutStart),
          call(onSignUpStart),
          call(onSignUpSuccess)
     ]);
}