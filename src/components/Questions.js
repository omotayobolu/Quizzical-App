import React, { useState } from "react";
import Options from "./Options";

const Questions = ({ quiz }) => {
  const [selected, setSelected] = useState(false);

  const optionClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <div>
      <div className="quizzes">
        <h2>{quiz.question}</h2>
        <Options selected={selected} optionClick={optionClick} />
      </div>
    </div>
  );
};

export default Questions;
