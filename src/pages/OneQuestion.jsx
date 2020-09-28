import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OneQuestion() {
  const [question, setQuestion] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8080/getQuestionID?id=1").then((data) => {
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      <h1>Question</h1>
    </div>
  );
}
