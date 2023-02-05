import styled from "styled-components";

export const FormContainer = styled.form`
  width: 500px;
  border-radius: 5px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormTitle = styled.h1`
  margin-bottom: 30px;
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
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.mainTextColor};

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const FormValue = styled.input`
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 0 30px ${(props) => props.theme.colors.inputBgc} inset;
  height: 30px;
  padding-left: 10px;
  -webkit-text-fill-color: ${(props) => props.theme.colors.mainTextColor};

  &:placeholder-shown {
    font-style: italic;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.decorColor};
    transition: ${(props) => props.theme.transition};
  }
`;

export const FormBtn = styled.button`
  margin-top: 40px;
  border: none;
  background-color: ${(props) => props.theme.colors.decorColor};
  color: #fff;
  font-weight: 700;
  height: 30px;
  border-radius: 5px;
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.errorColor};
  font-size: 10px;
  font-weight: 700;
`;
