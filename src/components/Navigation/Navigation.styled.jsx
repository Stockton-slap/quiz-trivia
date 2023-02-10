import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  box-shadow: 0px 15px 30px -15px #111;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ff8604;
  font-size: 20px;
  font-weight: 700;

  &.active {
    text-decoration: underline;
    font-size: 21px;
    transition: ${(props) => props.theme.transition};
  }
`;
