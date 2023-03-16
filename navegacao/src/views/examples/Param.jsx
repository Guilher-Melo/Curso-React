import React from "react";

import { useParams } from "react-router-dom";

export default function Param (props) {
  const { id } = useParams();
  return (
    <div className="param">
      <h1>Param</h1>
      <p>valor: {id}</p>
    </div>
  )
}