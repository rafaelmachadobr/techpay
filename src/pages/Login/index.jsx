import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LoginContainer } from "./styles";
import { useState } from "react";

export default function Login({ toggleTheme }) {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <LoginContainer>
        <div className="login-container">
          <div className="botoes">
            <button
              style={{
                borderRadius: "10px 0 0 10px",
                backgroundColor: login ? "#1521CF" : "transparent",
                color: "#fff"
              }}
            >
              Tenho conta
            </button>
            <button
              style={{
                borderRadius: "0 10px 10px 0",
              }}
            >
              Abrir conta
            </button>
          </div>
          <h2>Olá</h2>
          <p>Bem vindo de volta!</p>

          <form>
            <input type="text" placeholder="CPF" />
            <input type="password" placeholder="Senha" />
            <div className="esqueceu">
              <a href="/">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>
          </form>
        </div>
      </LoginContainer>
      <Footer />
    </>
  );
}
