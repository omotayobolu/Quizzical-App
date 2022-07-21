import React from "react";

const Quiz = ({ questions, setQuestions }) => {
  return (
    <div>
      <div className="quizzes">
        <h2></h2>
        <div className="options">
          <span className="option"></span>
          <span className="option"></span>
          <span className="option"></span>
          <span className="option"></span>
        </div>
      </div>
      <button className="btn">Check answers</button>
      <hr />
    </div>
  );
};

export default Quiz;
