import React from "react";

export default function IndiretaFilho(props) {
  const cb = props.quandoClickar;
  const min = 40;
  const max = 69;
  const gerarIdade = () => Math.floor(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>
        Filho
      </div>
      <button onClick={ (e) => cb('João', gerarIdade(), gerarNerd())}>
        Fornecer informações ao pai
      </button>
    </div>
  )
}