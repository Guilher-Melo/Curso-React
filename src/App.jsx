/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import RandomNumber from "./components/basicos/RandomNumber";

const forte = <h1> <strong>Hello World! I'm using JSX</strong></h1>;

export default () => (
    <div>
      <h2>Estou usando Arrow function</h2>
    {forte}
    <RandomNumber numIni={1} numFim={10} />
    <Primeiro />
    <ComParametro titulo="Análise dos alunos" nome="Joãozinho" nota={8.0} />
  </div>
  );
