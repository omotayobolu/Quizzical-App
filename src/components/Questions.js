import React from "react";

const Questions = ({ quiz }) => {
  return (
    <div>
      <div className="quizzes">
        <h2>{quiz.question}</h2>
        <div className="options">
          <span className="option"></span>
          <span className="option"></span>
          <span className="option"></span>
          <span className="option"></span>
        </div>
      </div>
    </div>
  );
};

export default Questions;
