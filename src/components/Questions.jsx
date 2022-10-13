import React, { useState } from "react";
import Options from "./Options";
import { nanoid } from "nanoid";

const Questions = (props) => {
  return (
    <div className="quiz">
      <h2>{props.question}</h2>
      <div>
        {props.answers.map((answer) => {
          return <Options key={nanoid()} options={answer} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
