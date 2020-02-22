import React, {useEffect} from "react";

import { Route } from "react-router-dom";
import {connect} from "react-redux";

import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../collection/collection.container";

const ShopPage = ({ match, fetchCollections }) => {

     useEffect(() => {
          fetchCollections();
     }, [fetchCollections]);
         
     return (       

          <div className="shop-page">                            
               <Route exact path={`${match.path}`}
                    component={CollectionsOverViewContainer} />
               
               <Route path={`${match.path}/:collectionID`}
                component={CollectionContainer}/>               
          </div>    
          )  
}

const mapDispatchToProps = (dispatch) => ({
     fetchCollections: () => dispatch(fetchCollectionsStartAsync())
 });
export default connect(null, mapDispatchToProps)(ShopPage);
