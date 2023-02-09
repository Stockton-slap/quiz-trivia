import styled from "styled-components";

export const UserMenuContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 20px;
  margin-right: 40px;
`;

export const UserMenuAvatar = styled.img`
  width: 40px;
  border-radius: 20%;
  background-color: #0abeff;
`;

export const UserMenuText = styled.p`
  font-weight: 700;
`;

export const UserMenuBtn = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.decorColor};
  color: #fff;
  font-weight: 700;
  height: 30px;
  border-radius: 5px;
`;
