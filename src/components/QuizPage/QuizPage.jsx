import {
  QuizContainer,
  QuizTitle,
  QuizList,
  QuizItem,
  QuizItemTitle,
  QuizItemWrapper,
  QuizText,
  QuizItemBox,
  QuizPlayerLabel,
  QuizPlayerName,
  QuizRounds,
  QuizRange,
  QuizBtn,
} from "./QuizPage.styled";

import { fetchQuestions } from "../../redux/quizOperations";
import { selectCurrentQuestion } from "../../redux/selectors";

import { useSelector, useDispatch } from "react-redux";
import { selectName } from "../../redux/selectors";
import { useState } from "react";
import QuestionList from "../QuestionList/QuestionList";

const QuizPage = () => {
  const name = useSelector(selectName);
  const currentQuestion = useSelector(selectCurrentQuestion);

  const dispatch = useDispatch();

  const [round, setRound] = useState(5);

  const handleChange = (e) => {
    setRound(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(fetchQuestions());
  };

  return currentQuestion === null ? (
    <QuizContainer>
      <QuizTitle>QUIZ</QuizTitle>
      <QuizList>
        <QuizItem>
          <QuizItemTitle>Game</QuizItemTitle>
          <QuizItemWrapper>
            <QuizText>Movie Trivia</QuizText>
          </QuizItemWrapper>
        </QuizItem>
        <QuizItem>
          <QuizItemTitle>Player</QuizItemTitle>
          <QuizItemWrapper>
            <QuizItemBox>
              <QuizPlayerLabel>Name</QuizPlayerLabel>
              <QuizPlayerName>{name}</QuizPlayerName>
            </QuizItemBox>
          </QuizItemWrapper>
        </QuizItem>
        <QuizItem>
          <QuizItemTitle>Options</QuizItemTitle>
          <QuizItemWrapper>
            <QuizRounds>{round} Rounds</QuizRounds>
            <QuizRange
              type="range"
              min="1"
              max="20"
              step="1"
              value={round}
              onChange={handleChange}
            />
          </QuizItemWrapper>
        </QuizItem>
      </QuizList>
      <QuizBtn type="button" onClick={handleClick}>
        START GAME
      </QuizBtn>
    </QuizContainer>
  ) : (
    <QuestionList />
  );
};

export default QuizPage;
