import React, { useState } from "react";

import "./register.css";

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");

  const database = [
    
  ];

  const errors = {
  };

  const handleSubmit = (event) => {
    
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
            name="name"
            placeholder="Nome Completo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {renderErrorMessage("name")}
        </div>
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
            type="email"
            name="userEmail"
            placeholder="Email"
            required
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMessage("passWord")}
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
          <button type="submit">Cadastro</button>
        </div>
      </form>
    </div>
  );

  return (
    <div class="app">
      <div class="cadastro-form">
        {isSubmitted ? <div>Usuário Logado</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
