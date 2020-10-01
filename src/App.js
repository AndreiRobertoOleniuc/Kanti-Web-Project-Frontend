import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import About from "./pages/About";
import Quesiton from "./pages/Questions";
import OneQuestion from "./pages/OneQuestion";
import Question from "./components/Question";
import Ausgabe from "./pages/Ausgabe";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const [auswahl, setAuswahl] = useState([]);
  const fetchData = async () => {
    const fetchData = await fetch("http://localhost:8080/getAllQuestion");
    const questions = await fetchData.json();
    setData(questions);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/QuestionStatic" component={Quesiton} />
          <Route path="/QuestionStatic/:id" component={OneQuestion} />
          <Route exact path="/Ausgabe">
            <Ausgabe auswahl={auswahl} setAuswahl={setAuswahl} />
          </Route>
          {data.map((item) => (
            <Route key={item.id} exact path={`/Questions/${item.id}`}>
              <Question
                name={item.question}
                nextPage={item.id + 1}
                lastPage={item.id === data.length ? "true" : "false"}
                auswahl={auswahl}
                setAuswahl={setAuswahl}
              />
            </Route>
          ))}
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
