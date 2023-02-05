import styled from "styled-components";

import { Link } from "react-router-dom";

export const HomeTitle = styled.h1`
  text-align: center;
  margin-top: 50px;
  font-family: ${(props) => props.theme.decorFont};
  color: ${(props) => props.theme.colors.decorColor};
`;

export const HomeImg = styled.img`
  width: 400px;
  display: block;
  margin: 0 auto;
`;

export const RegBtn = styled(Link)`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  background-color: ${(props) => props.theme.colors.decorColor};
  color: #fff;
  width: 150px;
  font-weight: 700;
  text-align: center;
`;
