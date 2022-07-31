import React from "react";

const Options = ({ quiz, data, setData, selected, optionClick }) => {
  const styles = {
    backgroundColor: selected ? "#D6DBF5" : null,
    border: selected ? null : "1px solid #293264",
  };

  /* fetch the incorrectanswers array and the correctanswer value
  add the correct answer to the incorrect answer array
  store in a different variable
  write function to select randomly and change the ui
*/

  return (
    <div className="options">
      <p style={styles} className="option">
        {/* {randomOption()} */}
        {quiz.correct_answer}
      </p>
      <p style={styles} className="option">
        {/* {randomOption()} */} {quiz.incorrect_answers[0]}
      </p>
      <p style={styles} className="option">
        {/* {randomOption()} */} {quiz.incorrect_answers[1]}
      </p>
      <p style={styles} className="option last">
        {/* {randomOption()} */} {quiz.incorrect_answers[2]}
      </p>
    </div>
  );
};

export default Options;
