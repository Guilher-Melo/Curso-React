import React, { Component } from "react";

import "./contador.css"

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

  setPasso = (e) => {
    this.setState({
      passo: Number(e.target.value),
    })
  }

  render(){
    return (
      <div className="contador">
        <h2>Contador</h2>
        <h3>{ this.state.numero }</h3>
        <div>
          <label htmlFor="passo">Passo: </label>
          <input type="number" name="passo" id="passo" value={this.state.passo} onChange={this.setPasso} />
        </div>
        <button onClick={this.decr}>-</button>
        <button onClick={this.incr}>+</button>
      </div>
    )
  }
}