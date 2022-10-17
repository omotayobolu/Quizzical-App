import React from "react";

const Options = (props) => {
  const checkOptionState = () => {
    if (props.optionState === "initial") {
      if (props.isSelected) {
        return "selected";
      } else {
        return "initial";
      }
    } else {
      return props.optionState;
    }
  };

  return (
    <div onClick={props.handleSelection} className={checkOptionState()}>
      <span className="option">{props.options}</span>
    </div>
  );
};

export default Options;
