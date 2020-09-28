import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Questions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/getAllQuestion").then((data) => {
      setData(data.data);
    });
  }, []);
  return (
    <div>
      {data.map((question) => (
        <p key={question.id}>{question.question}</p>
      ))}
    </div>
  );
}
