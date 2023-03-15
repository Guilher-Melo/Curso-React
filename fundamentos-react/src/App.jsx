/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./app.css";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import RandomNumber from "./components/basicos/RandomNumber";
import Card from "./components/layouts/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaALunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParImpar from "./components/condicional/ParImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/input";
import Contador from "./components/contador/Contador";
import NumerosAleatorios from "./components/Mega/NumerosAleatorios";


export default () => (
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="cards">

    <Card titulo="#12 - Mega" color="#07393c">
       <NumerosAleatorios  />
      </Card>
    <Card titulo="#11 - Componente classe Contador" color="#7a28cb">
       <Contador numeroInicial = {5} />
      </Card>

    <Card titulo="#10 - Componente controlado" color="#add2c2">
       <Input />
      </Card>

    <Card titulo="#09 - Comunicação indireta" color="#bfbccb">
       <IndiretaPai />
      </Card>

    <Card titulo="#08 - Comunicação direta" color="#73332E">
       <DiretaPai />
      </Card>

    <Card titulo="#07 - Condicional" color="#AA08B4">
        <ParImpar numero={11} />
        <UsuarioInfo usuario={{ nome: 'Guilherme'}} />
        <UsuarioInfo usuario={{}} />
        <UsuarioInfo />
      </Card>

      <Card titulo="#06 - Desfaio Repetição" color="#11F29">
        <TabelaProdutos />
      </Card>

      <Card titulo="#05 - Repetição" color="#11F969">
        <ListaALunos />
      </Card>

      <Card titulo="#04 - Componentes com filhos" color="#6495ED">
        <Familia sobrenome= "Ferreira">
          <FamiliaMembro nome="Lucas"></FamiliaMembro>
          <FamiliaMembro nome ="Maria"></FamiliaMembro>
          <FamiliaMembro nome="Vagner"></FamiliaMembro>
          <FamiliaMembro nome="Estevão"></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="#03 - Desafio número aleatório" color="#090">
        <RandomNumber numIni={1} numFim={10} />
      </Card>

      <Card titulo="#02 - Testando parâmetros" color="#F9CB11">
        <ComParametro titulo="Análise dos alunos" nome="Joãozinho" nota={8.0} />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#F08080">
        <Primeiro />
      </Card>
    </div>
    
  </div>
);
