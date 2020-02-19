//This component is where we direct each category to it's specific data items (i.e Hats => Hats shop)
import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage =  ({ collections }) => {
     console.log(collections);
   const { title, items} = collections;
     return (
          <div className="collection-page">
               <h2 className="title">{title}</h2>
               <div className="items">
                    {
                         items.map(item => (
                              <CollectionItem
                              key={item.id}
                              item={item} />
                         ))
                    }
               </div>
          </div>
     )
}
//ownProps here is the props of the component we are wrapping in connect()
const mapStateToProps = (state, ownProps) => ({
     collections: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);