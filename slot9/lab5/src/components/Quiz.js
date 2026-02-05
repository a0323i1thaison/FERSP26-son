import { useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { quizData } from "../data/quizData";
import Question from "./Question";
import { QuizContext } from "../context/QuizContext";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const { score, setScore } = useContext(QuizContext);

  const handleAnswer = (answer) => {
    if (answer === quizData[index].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (index + 1 < quizData.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <Container className="mt-4">
      {!finished ? (
        <>
          <Question data={quizData[index]} onAnswer={handleAnswer} />
          <Button className="mt-3" onClick={nextQuestion}>Next</Button>
        </>
      ) : (
        <div className="mt-5 border-top pt-3">
          <h1 className="text-danger fw-bold display-4">Quiz Completed!</h1>
          <p className="fs-3">Your score: {score}</p>
        </div>
      )}
    </Container>
  );
}
export default Quiz;