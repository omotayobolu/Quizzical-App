import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";

export default function App() {
  const [questions, setQuestions] = useState([]);

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
