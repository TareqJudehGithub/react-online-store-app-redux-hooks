import styled from "styled-components";
import CustomButton from '../custom-button/custom-button-component';

export const CollectionItemContainer = styled.div`
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
justify-content: center;
align-content: center;
flex: 1 1 auto;   
max-width: 300px;
margin: 10px 5px 30px 5px;
position: relative;
width: 40vw;

&:hover {
     .image {
       opacity: 0.8;
     }
 
     button {
       opacity: 0.85;
       display: flex;
     }
   }
`;
export const BackgroundImage = styled.div`
min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 1px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`}
`;
export const CollectionFooter = styled.div`
text-align: center;
  width: 100%;
  height: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Name = styled.span`
width: 90%;
margin-bottom: 15px;
`;

export const Price = styled.span`
width: 10%;
` 
export const AddButton = styled(CustomButton)`
  width: 65%;
  opacity: 0.7;
  position: absolute;
  top: 215px;
  opacity: 0;
  border-radius: 10px;
`;
