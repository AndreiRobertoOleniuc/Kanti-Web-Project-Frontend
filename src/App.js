import React from "react";
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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Questions" component={Quesiton} />
          <Route path="/Questions/:id" component={OneQuestion} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
