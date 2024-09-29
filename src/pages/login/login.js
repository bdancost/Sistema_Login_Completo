import React, { useState } from "react";
import api from "../../services/api";
import "./login.css";

export default function Login() {
  // Inicializando os estados com strings vazias
  var [adm, setUser] = useState();
  var [pass, setPass] = useState();

  function Logar() {
    if (adm === undefined) {
      alert("Preencha o campo USER");
    } else if (pass === undefined) {
      alert("Preencha o campo PASSWORD");
    } else {
      var Data = { adm, pass };
      api
        .post("/", Data)
        .then((Response) => {
          console.log(Response.data[0].token);
          alert(Response.data.token);
        })
        .catch((erro) => {
          alert("Erro ao comunicar-se com o servidor");
        });
    }
  }
  return (
    <>
      <div id="Login">
        <br />
        <br />
        <section>
          <div id="Logo"></div>
          <div id="Form">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="User"
              onChange={(e) => setUser(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <button onClick={Logar}>Login</button>
          </div>
        </section>
      </div>
    </>
  );
}
