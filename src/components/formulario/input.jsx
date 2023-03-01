import React, { useState } from "react";

import './input.css'

export default function Input (props) {
  const [valor, setValor] = useState('Inicial');

  function mudarInput(e) {
    setValor(e.target.value);
  }

  return (
    <div className="input">
      <h2>{valor}</h2>
      <input type="text" value={valor} onChange={mudarInput} />
      <input type="text" value={valor} readOnly />
      <input type="text" value={undefined} />
    </div>
  )
}