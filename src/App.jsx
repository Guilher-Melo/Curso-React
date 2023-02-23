/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import RandomNumber from "./components/basicos/RandomNumber";
import Card from "./components/layouts/Card";

const forte = <h1> <strong>Hello World! I'm using JSX</strong></h1>;

export default () => (
  <div>
    { forte }
    <h1>Fundamentos React</h1>
    <Card titulo="#03 - Desafio número aleatório">
      <RandomNumber numIni={1} numFim={10} />
    </Card>

    <Card titulo="#02 - Testando parâmetros">
      <ComParametro titulo="Análise dos alunos" nome="Joãozinho" nota={8.0} />
    </Card>

    <Card titulo="#01 - Primeiro componente">
      <Primeiro />
    </Card>
    
  </div>
);
