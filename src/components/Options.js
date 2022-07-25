import React from "react";

const Options = ({ selected, optionClick }) => {
  const styles = {
    backgroundColor: selected ? "#D6DBF5" : null,
    border: selected ? null : " 1px solid #293264",
  };

  return (
    <div className="options">
      <span style={styles} onClick={optionClick} className="option">
        Options
      </span>
      <span style={styles} onClick={optionClick} className="option">
        Options
      </span>
      <span style={styles} onClick={optionClick} className="option">
        Options
      </span>
      <span style={styles} onClick={optionClick} className="option">
        Options
      </span>
    </div>
  );
};

export default Options;
