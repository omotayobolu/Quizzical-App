import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";

export default function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      return fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
      )
        .then((response) => response.json())
        .then((data) => setQuestions(data.results));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Quiz">
          <Route
            index
            element={<Quiz questions={questions} setQuestions={setQuestions} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
