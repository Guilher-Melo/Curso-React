import React, { useState } from "react";
import './mega.css'

export default function NumerosAleatorios (props) {
  function geraNumeroAleatorio () {
    return Math.round(Math.random() * (60-1) + 1)
  }
  
  function geraArray (qtd) {
    let arrayNums = [];
    while (arrayNums.length < qtd) {
      let num = geraNumeroAleatorio();
      if (!arrayNums.includes(num)) {
        arrayNums.push(num);
      }
    }
    
    return arrayNums.sort((a, b) => a - b);
  }

  const [qtd, setQtd] = useState(props.qtd || 6);
  
  const numerosIniciais = geraArray(qtd);

  const [arraysNum, setArraysNum] = useState(numerosIniciais);


  return (
    <div className="mega">
      <div>
        <h2>Mega</h2>
        <h3 className="nums">{ arraysNum.join(' ') }</h3>  
        <p>
          <label htmlFor="qtd">Quantidade de números</label>
          <input min={6} max={14} type="number" name="qtd" id="qtd" value={qtd} onChange={e => setQtd(Number(e.target.value))}/>
        </p>
        <p>
          <button onClick={_ => setArraysNum(geraArray(qtd))}>Gerar números </button>
        </p>
      </div>
    </div>
  )

  }