import React from "react";

export default function RandomNumber (props) {
  const { numIni, numFim } = props;
  const numAle = Math.round(Math.random() * (numFim - numIni) + numIni);
  return (
    <>
      { numAle }
    </>
  )
}