import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default HomePage;
