import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentQuestion } from "../../redux/selectors";
import { selectQuestions } from "../../redux/selectors";
import { getNextQuestion } from "../../redux/quizSlice";

import {
  List,
  QuestionText,
  AnswersContainer,
  Answer,
  NextQuestionBtn,
  WrongResultText,
  CorrectResultText,
} from "./QuestionList.styled";

import arrayShuffle from "array-shuffle";

const QuestionList = () => {
  const currentQuestionIndex = useSelector(selectCurrentQuestion);
  const questions = useSelector(selectQuestions);

  const dispatch = useDispatch();

  const [isAnswered, setIsAnswered] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const separateQuestion = questions[currentQuestionIndex];

  const { question, incorrectAnswers, correctAnswer } = separateQuestion;

  const memoizedAnswers = useMemo(() => {
    const allAnswers = [...incorrectAnswers, correctAnswer];

    const shuffledAnswers = arrayShuffle(allAnswers);
    return shuffledAnswers;
  }, [correctAnswer, incorrectAnswers]);

  const handleAnswersClick = (e) => {
    if (e.target.textContent === correctAnswer) {
      setIsWrong(false);
    } else {
      setIsWrong(true);
    }

    setIsAnswered(true);
  };

  const handleNextBtnClick = () => {
    dispatch(getNextQuestion());
    setIsAnswered(false);
  };

  return (
    <List>
      <QuestionText>{question}</QuestionText>
      <AnswersContainer>
        {memoizedAnswers.map((answer, i) => {
          return (
            <Answer
              key={i}
              type="button"
              onClick={handleAnswersClick}
              disabled={isAnswered}
            >
              {answer}
            </Answer>
          );
        })}
      </AnswersContainer>

      {isAnswered && (
        <>
          <NextQuestionBtn type="button" onClick={handleNextBtnClick}>
            Next question
          </NextQuestionBtn>
          {isWrong ? (
            <WrongResultText>Wrong answer</WrongResultText>
          ) : (
            <CorrectResultText>Correct answer</CorrectResultText>
          )}
        </>
      )}
    </List>
  );
};

export default QuestionList;
