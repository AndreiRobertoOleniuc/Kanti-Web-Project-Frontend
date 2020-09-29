import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Questions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/getAllQuestion").then((data) => {
      setData(data.data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {data.map((question) => (
        <h1 key={question.id}>
          <Link to={`/Questions/${question.id}`}>{question.question}</Link>
        </h1>
      ))}
    </div>
  );
}
