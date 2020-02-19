import React from "react";
import {connect } from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import "../collection-item/collection-item.styles.scss";

import {CollectionItemContainer, BackgroundImage, CollectionFooter, Name, Price, AddButton} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
     const { name, price, imageUrl } = item;
     return (
          <CollectionItemContainer>
               <BackgroundImage
                    className="image"
                    imageUrl={imageUrl}         
               />           
               <CollectionFooter>
                    <Name>{name}</Name>     
               </CollectionFooter>
               <div>
                    <Price>{price}</Price>
               </div>
               <AddButton
               inverted
               onClick={() => {addItem(item)}}>
               Add to Cart
               </AddButton>
               
          </CollectionItemContainer>
     )
     
}
//creating addItem which will be add to CollectionItem class.
//
const mapDispatchToProps = (dispatch) => ({
     addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps) (CollectionItem);