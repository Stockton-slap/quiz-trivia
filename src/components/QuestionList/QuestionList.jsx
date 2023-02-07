import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentQuestion } from "../../redux/selectors";
import {
  List,
  QuestionText,
  AnswersContainer,
  IncorrectAnswerBtn,
  CorrectAnswerBtn,
  NextQuestionBtn,
  WrongResultText,
  CorrectResultText,
} from "./QuestionList.styled";

const QuestionList = () => {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const { question, incorrectAnswers, correctAnswer } = currentQuestion;

  return (
    <List>
      <QuestionText>{question}</QuestionText>
      <AnswersContainer>
        {incorrectAnswers.map((answer, i) => {
          return (
            <IncorrectAnswerBtn
              key={i}
              type="button"
              onClick={() => {
                setIsAnswered(true);
                setIsWrong(true);
              }}
            >
              {answer}
            </IncorrectAnswerBtn>
          );
        })}

        <CorrectAnswerBtn
          type="button"
          onClick={() => {
            setIsAnswered(true);
            setIsWrong(false);
          }}
        >
          {correctAnswer}
        </CorrectAnswerBtn>
      </AnswersContainer>

      {isAnswered && (
        <>
          <NextQuestionBtn>Next question</NextQuestionBtn>
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
