import React from "react";

export default function DiretaFilho (props) {
  return (
    <div>
      <span>{props.nome} </span>
      <span> {props.idade}</span>
      <span> {props.nerd ? "É nerd" : "Não é nerd"}!</span>
    </div>
  )
}