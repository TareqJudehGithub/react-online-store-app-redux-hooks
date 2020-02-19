import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
     type: ShopActionTypes.FETCH_COLLECTIONS_START
     
});
export const fetchCollectionsSuccess = (collectionsMap)  => ({
     type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
     payload: collectionsMap
});
export const fetchCollectionsFailure = (errorMEssage) => ({
     type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
     payload: errorMEssage
});

// A func that returns another func that gets dispatched in it:
export const fetchCollectionsStartAsync = () => {
     
     return dispatch => {
     //A. redux creates the collectionRef:
          const collectionRef = firestore.collection("collections");

     //B. then redux dispatches the action fetchCollectionsStart, which
     //will switch the shop reducer state to true(default: ifFetching: false).
          dispatch(fetchCollectionsStart());

     //C. then redux begings this async request:
     //to get the data from collections:
          collectionRef
          .get()
          .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
     })
     .catch(error=> dispatch(fetchCollectionsFailure(error.message)));
     };
     
     
}    

