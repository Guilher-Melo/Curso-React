import React from "react";

export default function ComParametro (props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{ props.titulo }</h2>
      <p>O aluno <strong>{ props.nome }</strong> teve nota: { props.nota }</p>
      <p>Ele foi <strong>{ status }</strong></p>
    </div>
  )
}