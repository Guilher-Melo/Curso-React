import React, { Component } from "react";

import Display from "./Display";

import "./contador.css"
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  };

  incr = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  };
  decr = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    })
  }

  render(){
    return (
      <div className="contador">
        <h2>Contador</h2>
        <Display numero={ this.state.numero }/>
        <PassoForm passo={ this.state.passo } setPasso={ this.setPasso }/>
        <Botoes setDecrement={ this.decr } setIncrement={ this.incr } />
      </div>
    )
  }
}