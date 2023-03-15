import React from "react";

export default function Botoes (props) {
  return (
    <div>
        <button onClick={props.setDecrement}>-</button>
        <button onClick={props.setIncrement}>+</button>
    </div>
  )
}