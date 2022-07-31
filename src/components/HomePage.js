import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <p className="home-description">Some quick questions</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Link to="quiz">
          <button className="btn" type="submit">
            Start Quiz
          </button>
        </Link>
      </form>
    </div>
  );
};

export default HomePage;
