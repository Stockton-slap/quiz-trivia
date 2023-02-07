import styled from "styled-components";

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QuizTitle = styled.h1`
  font-family: ${(props) => props.theme.decorFont};
  color: ${(props) => props.theme.colors.decorColor};
  font-size: 50px;
  margin-top: 30px;
`;

export const QuizList = styled.ul`
  margin-top: 30px;
  list-style: none;
`;

export const QuizItem = styled.li`
  margin-bottom: 30px;
`;

export const QuizItemTitle = styled.h2`
  text-align: center;
  font-family: ${(props) => props.theme.decorFont};
  color: ${(props) => props.theme.colors.quizColor};
  font-size: 30px;
`;

export const QuizItemWrapper = styled.div`
  border: 6px solid ${(props) => props.theme.colors.decorColor};
  background-color: #d9d9d9;
  width: 700px;
  height: 70px;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const QuizText = styled.p`
  font-size: 30px;
  font-family: ${(props) => props.theme.decorFont};
  color: ${(props) => props.theme.colors.quizColor};
`;

export const QuizItemBox = styled.div`
  width: 600px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const QuizPlayerLabel = styled.p`
  color: ${(props) => props.theme.colors.quizColor};
`;

export const QuizPlayerName = styled.p`
  color: ${(props) => props.theme.colors.quizColor};
`;

export const QuizRounds = styled.p`
  margin-right: 25px;
  color: ${(props) => props.theme.colors.quizColor};
`;

export const QuizRange = styled.input`
  width: 500px;
`;

export const QuizBtn = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.decorColor};
  color: #fff;
  font-weight: 700;
  height: 30px;
  border-radius: 5px;
`;
