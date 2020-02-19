import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";
import styled from "styled-components";

export const CartIconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

export const ShopIconContainer = styled(ShoppingIcon)`
width: 50px;
height: 30px;
margin-left: 2px;
`;
export const ItemCountContainer = styled.span`
position: absolute;
       font-size: 15px;
       font-weight: 500; 
       bottom: 13px;
      right: 13px;
`

