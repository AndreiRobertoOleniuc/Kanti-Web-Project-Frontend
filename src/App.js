//React Imports
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Styles and Bootstap
import "./styles/styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";

//Components Imports
import NavBar from "./components/Navbar";
import Home from "./pages/website/Home";
import NotFoundPage from "./pages/error/404";
import About from "./pages/website/About";
import Quesiton from "./pages/questions/Questions";
import OneQuestion from "./pages/questions/OneQuestion";
import Question from "./pages/questions/Question";
import Ausgabe from "./pages/questions/Ausgabe";
import Form from "./pages/website/Form";

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
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/Home" component={Home} />
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
