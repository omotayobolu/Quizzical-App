import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Questions from "./Questions";
// import { Link } from "react-router-dom";

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple",
    })
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="quizzes">
      {loading && (
        <div>
          {" "}
          <h1 className="loading">Loading questions...</h1>
        </div>
      )}

      {errorMessage && !data && (
        <div>
          <h1 className="loading">
            Problem with loading questions, check again later.
          </h1>
        </div>
      )}

      {data.map((quiz) => (
        <Questions key={nanoid()} quiz={quiz} />
      ))}

      <button
        style={{ display: loading ? "none" : "block" }}
        className="btn checkAnswer"
      >
        Check answers
      </button>
    </div>
  );
};

export default Quiz;
