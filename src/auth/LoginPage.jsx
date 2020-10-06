import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Auth from "./auth";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const [name, setName] = useState("");
  const [vorname, setVorname] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeVorname = (e) => {
    setVorname(e.target.value);
  };
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    Auth.authenticate(
      () => {
        history.replace(from);
      },
      name,
      vorname
    );
  };

  return (
    <div className="centerContent">
      <p>
        Geben sie bitte Ihre Benutzerdaten ein um den EignungsTest durch zu
        führen
      </p>
      <input
        type="text"
        className="input"
        placeholder="Nachname"
        onChange={changeName}
      />
      <input
        type="text"
        className="input"
        placeholder="Vorname"
        onChange={changeVorname}
      />
      <button onClick={login}>Test Starten</button>
    </div>
  );
}

export default LoginPage;
