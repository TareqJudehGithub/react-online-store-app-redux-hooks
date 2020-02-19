const INITIAL_STATE = {
     sections: [
          {                            
               title: 'Women',
               imageUrl: "https://i.ibb.co/vY58WNk/Women.jpg",
               size: 'large',
               id: 4,
               linkUrl: 'shop/women'
                
               },
               {
               title: 'Men',
               imageUrl: 'https://i.ibb.co/1mvLjJB/Men.jpg',
               size: 'large',
               id: 5,
               linkUrl: 'shop/men'
                 
               },
               {
               title: 'Hats',
               imageUrl: 'https://i.ibb.co/b69yBdq/Hats.jpg',
               size: 'large',
               id: 1,
               linkUrl: 'shop/hats'
               },
               {
               title: 'Sneakers',
               imageUrl: 'https://i.ibb.co/f1dJ5G4/Sneakers.png',
               size: 'large',
               id: 2,
               linkUrl: 'shop/sneakers'
               },              
               {
               title: 'Jackets',
               imageUrl: 'https://i.ibb.co/zGMkGsF/TB2y6y6hs2v-U1-Jj-SZFw-XXX2cp-Xa-3192213483-1.jpg',
               size: 'large',
               id: 3,
               linkUrl: 'shop/jackets'
               }  
     ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
     
          default:
               return state;
     }
}

export default directoryReducer;