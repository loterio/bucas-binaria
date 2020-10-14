import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";
import "./mine.css";

// exemplos. - - - - - - - - - - - - - - - - - - - - - - - -
const elemento = (<div><h2>Fala galera</h2></div>); // com o jsx e abaixo o mesmo sem usar o JSX

const elemento2 = React.createElement("div", null, React.createElement("h2", null, "Fala galera"));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setNumPalpites(1);
    setMin(0);
    setMax(300);
  };
  if (estado === "ENTRADA") {
    return (
      <button onClick={iniciarJogo} id="dot">
        Iniciar Jogo
      </button>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número que você pensou({palpite}) com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo} id="dot">
          Jogar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou} id="yea">
        Acertou!
      </button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="bigo" />, rootElement);

export default App
