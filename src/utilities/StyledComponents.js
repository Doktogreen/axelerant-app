import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const StyledThemeBtn = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.iconColor};
  transform: ${(props) => props.theme.leftOrRight};
`;

const StyledThemeTrack = styled.div`
  background-color: ${(props) => props.theme.accent2};
  border-color: ${(props) => props.theme.borderColor};
`;

const StyledLogo = styled.span`
  color: ${(props) => props.theme.fontColor};
`;

const StyledProductCard = styled.div`
  width: 23%;
  color: #000;
  background-color: #fff;
`;

const ProductsContainerDiv = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const SortFiltersDiv = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const StyledShoppingCart = styled.li`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

// Don't change this hamburger icon, it works, even though sometimes it gets fucky and doesn't like to change colors
const StyledHamburgerIcon = styled.span`
  background-color: ${(props) => props.theme.fontColor};
  &:after,
  &:before {
    background-color: ${(props) => props.theme.fontColor};
  }
  &.is-active {
    background-color: ${(props) => props.theme.fontColor};
  }
`;

const StyledNavMenu = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const StyledEventButton = styled.button`
  background-color: ${(props) => props.theme.eventBtnBg};
  color: ${(props) => props.theme.eventBtnFont};
`;
const StyledSearchBox = styled.input`
  width: 675px;
  height: 49px;
  left: 0px;
  top: 0px;
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding-left: 20px !important;
  margin: 16px 0px;
  background-color: ${(props) => props.theme.searchBoxBg};
  color: ${(props) => props.theme.searchBoxFont};
`;

export {
  StyledNavbar,
  StyledThemeBtn,
  StyledThemeTrack,
  StyledLogo,
  StyledProductCard,
  ProductsContainerDiv,
  SortFiltersDiv,
  StyledShoppingCart,
  StyledHamburgerIcon,
  StyledNavMenu,
  StyledSearchBox,
  StyledEventButton
};
