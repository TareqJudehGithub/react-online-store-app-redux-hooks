import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
     [selectShop],
     (shop => shop.collections)
);

export const selectCollectionsForPreview = createSelector(
     [selectCollections],
     collections => Object.keys(collections).map(key =>
          collections[key])
);

//135. using obj shop.data 

export const selectCollection = collectionUrlParam => createSelector(
     [selectCollections],
          collections =>collections[collectionUrlParam]
);
// export const selectCollectionsLoaded = createSelector(
//      [selectShop],
//      shop => !!shop.collections 
// )