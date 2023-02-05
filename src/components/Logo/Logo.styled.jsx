import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 4rem;
  text-shadow: 5px 5px #00000066;
  color: ${(props) => props.theme.colors.decorColor};
  font-family: ${(props) => props.theme.decorFont};
  margin-left: 40px;
`;
