import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <p className="home-description">Some description if needed</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <button className="btn" type="submit">
          <Link to="quiz">Start Quiz</Link>
        </button>
      </form>
    </div>
  );
};

export default HomePage;
