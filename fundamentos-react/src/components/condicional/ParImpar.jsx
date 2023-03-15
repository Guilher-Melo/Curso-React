import React from "react";

export default function ParImpar (props) {
  const isPar = props.numero % 2 === 0;

  return (
    <div>
      <div>{ props.numero }</div>
        { isPar ? <span>PAR</span> : <span>ÍMPAR</span> }
    </div>
  )
}