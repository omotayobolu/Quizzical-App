import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";

export default function App() {
  const API_URL =
    "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const result = data.results;
        const questions = Object.values(result);
        console.log(questions);
        setItems(questions);
      } catch (err) {
        console.log(err);
      }
    };

    getItems();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Quiz">
          <Route index element={<Quiz items={items} setItems={setItems} />} />
        </Route>
      </Routes>
    </div>
  );
}
