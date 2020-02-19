import React from "react";
import CollectionItem from "../collection-item/collection-item.component"
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => ( //the items array in shop.data.js
     <div className="collection-preview">
          <h1 className="title"
          style={{marginTop:"50px"}}
          >
               {title.toUpperCase()}
               </h1>
          <div className="preview">
               {
                    items
                    .filter((item, index) =>index < 4)
                    
                    //for redux 
                    .map((item)=> {
                         return (
                              <CollectionItem
                              key={item.id}
                              item={item}
                              />
                         )
                    })
               }
               
          </div>
     </div>
)
export default CollectionPreview;