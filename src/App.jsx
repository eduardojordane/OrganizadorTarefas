import React from "react";
import Router from "./components/Router/Router";
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App" >
      <Header />
      <Router />
    </div>
  );
}

export default App;


/* Ao usar o arquivo, estava dando erro ao abrir no navegador devido a "./routing" não estar definido
em lugar algum. Criei o arquivo routing.jsx para isso.

O arquivo main.jsx parece ser usado apenas para definir as rotas.
O Main chama o App, que chama o Router - não entendi se isso é necessário de fato. Eu não poderia fazer
tudo dentro do App.jsx?



*/