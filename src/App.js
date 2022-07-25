import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";

export default function App() {
  // useEffect(() => {
  //   const fetchData = () => {
  //     return fetch(
  //       "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   };

  //   fetchData();
  // });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Quiz">
          <Route index element={<Quiz />} />
        </Route>
      </Routes>
    </div>
  );
}
