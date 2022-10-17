import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import arrayShuffle from "array-shuffle";
import Confetti from "react-confetti";

const Quiz = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    setLoading(true);
    fetch(
      "https://the-trivia-api.com/api/questions?categories=science,general_knowledge&limit=5&region=NG&difficulty=easy"
    ).then((response) =>
      response.json().then((data) => {
        let results = data.map((result) => {
          return {
            ...result,
            answers: [result.correctAnswer, ...result.incorrectAnswers],
          };
        });

        let completeQuestions = results.map((result) => {
          return {
            ...result,
            answers: arrayShuffle(result.answers),
          };
        });

        let correctOption = data.map((result) => {
          return {
            id: result.id,
            correctAnswer: result.correctAnswer,
          };
        });

        let selectedAnswer = data.map((result) => {
          return {
            id: result.id,
            answer: "",
          };
        });

        setLoading(false);
        setQuestions(completeQuestions);
        setCorrectAnswers(correctOption);
        setSelectedAnswers(selectedAnswer);
        setCorrectAnswersNumber(0);
        setIsCompleted(false);
      })
    );
  };
  const checkResult = () => {
    let number = 0;

    selectedAnswers.map((answer, index) => {
      if (answer.answer === correctAnswers[index].correctAnswer) {
        number++;
      }
    });

    setCorrectAnswersNumber(number);
    setIsCompleted(true);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="quizzes">
      {isCompleted
        ? correctAnswersNumber === questions.length && <Confetti />
        : null}
      {loading && <h1 className="loading">Loading questions...</h1>}
      {!questions && (
        <h1 className="loading">Error loading questions, try again</h1>
      )}
      {questions &&
        questions.map((quiz, index) => {
          return (
            <Questions
              key={quiz.id}
              id={quiz.id}
              question={quiz.question}
              answers={quiz.answers}
              selectedAnswer={selectedAnswers[index].answer}
              setSelectedAnswers={setSelectedAnswers}
              finalData={isCompleted ? correctAnswers[index] : null}
            />
          );
        })}

      <div className="summary">
        {isCompleted ? (
          <div className="completed-summary">
            <p>
              You scored {correctAnswersNumber}/{questions.length} correct
              answers
            </p>
            <button onClick={refreshPage} disabled={loading} className="btn">
              Play again
            </button>
          </div>
        ) : (
          <button onClick={checkResult} className="btn checkAnswer">
            Check answers
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
