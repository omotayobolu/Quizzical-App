import React, { useState } from "react";
import Options from "./Options";

const Questions = ({ quiz, data, setData }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div className="quiz">
        <h2>{quiz.question}</h2>
        <Options
          quiz={quiz}
          data={data}
          setData={setData}
          selected={selected}
          optionClick={optionClick}
        />
      </div>
    </div>
  );
};

export default Questions;
