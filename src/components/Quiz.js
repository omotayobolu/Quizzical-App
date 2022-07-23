import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, []);
  const wrongOption = results.incorrect_answers;
  const correctOption = results.correct_answer;

  const allOptions = { ...wrongOption, correctOption };
  const randomOption = Math.floor(Math.random() * allOptions.length);

  const options = allOptions[randomOption];

  console.log(options);

  //   function randomOption() {
  //     const randomNumber = Math.floor(Math.random * setAllOptions);
  //     const wrongOption = allOptions[randomNumber].incorrect_answers;
  //   }

  return (
    <div>
      <h2>{results.question}</h2>
      <div className="options">
        <div className="option">{results.options}</div>
        <div className="option">{results.options}</div>
        <div className="option">{results.options}</div>
        <div className="option">{results.options}</div>
      </div>
    </div>
  );
};

export default Quiz;
