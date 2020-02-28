import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";


const menuItem = ({ history, size, title, imageUrl, linkUrl, match }) => {
     
   
     return(

          <div className={`${size} menu-item`}
          //psuodo code: we take the match.url into the linkUrl
          onClick={()=> history.push(`${match.url}${linkUrl}`)}>
               <div
               className="background-image"
               style={{backgroundImage: 
                    `url(${imageUrl})`}}
               ></div>
                    <div className="content">                 
                         <h1 className="title">{title}</h1>
                         
                         <button className="subTitle"
                         style={{

                                   marginBottom: "10px",
                                   fontSize: ".8em",
                                   color: "white",
                                   textShadow: "1px 1px grey",
                                   textAlign: "center"        
                              }}
                              >
                              SHOP NOW</button>                      
                    </div>
          </div>
     )
}
export default withRouter(menuItem);
