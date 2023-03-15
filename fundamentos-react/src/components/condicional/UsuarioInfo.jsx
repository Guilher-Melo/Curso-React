import React from "react";
import If from "./If";

export default function UsuarioInfo (props) {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test ={usuario && usuario.nome}>
        Seja bem vindo(a) <strong>{ usuario.nome }</strong>!
      </If>
      <If test ={!usuario || !usuario.nome}>
        Seja bem vindo(a) <strong>usuário</strong>!
      </If>
    </div>
  )
}