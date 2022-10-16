import React, { useState } from "react";
import Options from "./Options";
import { nanoid } from "nanoid";

const Questions = (props) => {
  const selectionHandler = (option) => {
    props.setSelectedAnswers((prevAnswers) =>
      prevAnswers.map((answer) => {
        return props.id === answer.id ? { ...answer, answer: option } : answer;
      })
    );
  };

  const checkAnswer = (answer) => {
    if (!props.selectedAnswer) {
      return "greyed-out";
    } else if (props.finalData.correctAnswers === answer) {
      return "correct";
    } else if (
      props.finalData.correctAnswers !== props.selectedAnswer &&
      props.selectedAnswer === answer
    ) {
      return "wrong";
    } else {
      return "greyed-out";
    }
  };

  return (
    <div className="quiz">
      <h2>{props.question}</h2>
      <div className="options">
        {props.answers.map((answer) => {
          return (
            <Options
              key={nanoid()}
              options={answer}
              handleSelection={() => selectionHandler(answer)}
              isSelected={props.selectedAnswer === answer ? true : false}
              optionState={props.finalData ? checkAnswer(answer) : "initial"}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Questions;
