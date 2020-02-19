// import styled, {css} from "styled-components";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div `
height: 70px;
     width: 100%;
     display: flex;
     justify-content: space-between;
     margin-bottom: 25px;
     padding-right: 30px;
    top: 0;
    width: 100%;
`
export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding-left: 0px;
margin-left: 10px;
padding-top: 10px;
`
export const OptionsContainer = styled.div`
width: 75%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
// export const OptionContainerStyles = css`
// padding: 10px 10px;
// cursor: pointer;
// `
export const OptionLink = styled(Link)`
padding: 10px 10px;
cursor: pointer;
`
// // export const OptionDiv = styled.div`
// // ${OptionContainerStyles}
// `