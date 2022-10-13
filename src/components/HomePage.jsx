import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <p className="home-description">Some quick questions</p>
      <Link to="questions">
        <button className="btn" type="submit">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
