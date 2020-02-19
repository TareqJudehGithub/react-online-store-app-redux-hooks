import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
     [selectShop],
     (shop => shop.collections)
);

//The selector where we preview all the shop main categories:
export const selectCollectionsForPreview = createSelector(
     [selectCollections],
     collections => 
//164 .2
    (
     collections
     ?
          Object.keys(collections).map(key =>
          collections[key])
     :
          []
     )
);

//the selector where we direct each category to it's specific shop items.
export const selectCollection = collectionUrlParam => createSelector(
     [selectCollections],
          collections =>
//164. 3
     (
     collections
     ?
          collections[collectionUrlParam]
     :
          null
     )
);

//170
export const selectIsCollectionFetching = createSelector(
     [selectShop],
     (shop => shop.isFetching)
);

//171.
export const SelectIsCollectionsLoaded = createSelector(
     [selectShop],
     //if the collections object is loaded we'll get true,
     //otherwise, w'ell get false.
     (shop => !!shop.collections) 
);

