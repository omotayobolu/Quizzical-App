import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";

export default function App() {
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
