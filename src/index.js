import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';


const element = document.getElementById('root');
const forte = <h1> <strong>Hello World! I'm using JSX</strong></h1>;

ReactDOM.render(
  <div>
    { forte }
    <Primeiro></Primeiro>
    <ComParametro titulo ="Análise dos alunos" nome= "Joãozinho" nota={8.0} />
    <ComParametro titulo ="Análise dos alunos" nome= "Luquinhas" nota={6.0} />
  </div>, 
  element
  );