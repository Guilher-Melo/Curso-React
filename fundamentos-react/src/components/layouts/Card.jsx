import React from "react";
import "./card.css";

export default function Card (props) {

  const style = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00",
  }

  return (
    <div className="card" style={style}>
      <div className="title">{ props.titulo }</div>
      <div className="content">{ props.children }</div>
    </div>
  )
}