import styled from "styled-components";

export const List = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const QuestionContainer = styled.div`
  border: 2px solid #2a2a2a;
`;

export const QuestionText = styled.p``;

export const AnswersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Answer = styled.button``;

export const NextQuestionBtn = styled.button`
  position: absolute;
  bottom: 50px;
`;

export const WrongResultText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 50px;
`;

export const CorrectResultText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: green;
  font-size: 50px;
`;
