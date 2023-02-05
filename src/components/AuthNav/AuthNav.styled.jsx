import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const AuthNavWrapper = styled.div`
  margin-right: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.decorColor};
  font-size: 20px;
  font-weight: 700;

  &:not(:first-child) {
    padding-left: 30px;
  }

  &.active {
    text-decoration: underline;
    font-size: 21px;
    transition: ${(props) => props.theme.transition};
  }
`;
