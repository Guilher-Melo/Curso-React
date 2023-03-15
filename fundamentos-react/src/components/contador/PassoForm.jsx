import React from "react";

export default function PassoForm (props) {
  return (
    <div>
      <label htmlFor="passo">Passo: </label>
          <input 
          type="number" name="passo" id="passo" 
          value={props.passo} 
          onChange={ e=> props.setPasso(Number(e.target.value))} />
    </div>
  )
}