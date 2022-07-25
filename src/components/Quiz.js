import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Questions from "./Questions";

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple",
    })
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {loading && (
        <div>
          {" "}
          <h1>Loading questions...</h1>
        </div>
      )}

      {data.map((quiz) => (
        <Questions key={nanoid()} quiz={quiz} />
      ))}
    </main>
  );
};

export default Quiz;
