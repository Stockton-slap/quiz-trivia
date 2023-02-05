import styled from "styled-components";

export const FormContainer = styled.form`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.formBorderColor};
  border-radius: 5px;
  padding: 50px;
  margin-top: 50px;
  background-color: #fff;
`;

export const FormTitle = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  font-family: ${(props) => props.theme.decorFont};
  color: ${(props) => props.theme.colors.decorColor};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  text-align: center;
  font-weight: 700;
`;

export const FormValue = styled.input``;

export const FormBtn = styled.button``;
