import React from "react";

const Quiz = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div className="quizzes">
            <h2>{item.question}</h2>
            <div className="options">
              <div className="option">{item.incorrect_answers[0]}</div>
              <div className="option">{item.incorrect_answers[1]}</div>
              <div className="option">{item.correct_answer}</div>
              <div className="option">{item.incorrect_answers[2]}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Quiz;

{
  /* <div> */
}
//   <div className="quizzes">
//     <h2></h2>
//     <div className="options">
//       <span className="option"></span>
//       <span className="option"></span>
//       <span className="option"></span>
//       <span className="option"></span>
//     </div>
//   </div>
//   <button className="btn">Check answers</button>
//   <hr />
