import React from "react";

export default function RandomNumber (props) {
  const { numIni, numFim } = props;
  const numAle = Math.round(Math.random() * (numFim - numIni) + numIni);
  return (
    <>
    <h2>Números aleatórios</h2>
    <p>Número inicial: { numIni }</p>
    <p>Número final: { numFim }</p>
      <p><strong>Resultado: { numAle } </strong></p>
    </>
  )
}