import React, { useState } from "react";
import "./home.css";

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const database = [
    {
      username: "adriane",
      password: "123456"
    },
    {
      username: "davi",
      password: "123456"
    }
  ];

  const errors = {
    userName: "Usuário Inválido",
    passWord: "Senha inválida"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = database.find((user) => user.username === userName);

    if (userData) {
      if (userData.password !== passWord) {
        setErrorMessages({ name: "passWord", message: errors.passWord });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "userName", message: errors.userName });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div class="contact-us">
      <form onSubmit={handleSubmit}>
        <div class="input-container">
          <input
            type="text"
            name="userName"
            placeholder="Usuário"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {renderErrorMessage("userName")}
        </div>
        <div class="input-container">
          <input
            type="password"
            name="passWord"
            placeholder="Senha"
            required
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
          {renderErrorMessage("passWord")}
        </div>
        <div class="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div class="app">
      <div class="login-form">
        {isSubmitted ? <div>
            Logado
        </div> : renderForm}
      </div>
    </div>
  );
}

export default App;
