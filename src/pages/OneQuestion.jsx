import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OneQuestion({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://localhost:8080/getQuestionID?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
  return (
    <div>
      <h2>{item.id}</h2>
      <h2>{item.question}</h2>
    </div>
  );
}

export default OneQuestion;
