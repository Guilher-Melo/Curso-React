import React from "react";

import alunos from "../../data/alunos";

export default function ListaALunos (props) {
  const alunoLi = alunos.map((aluno) => {
    return (
       <li key={aluno.id}>{ aluno.id }: { aluno.nome } - { aluno.nota }</li>
    )
  })
  return (
    <div>
      <ul style={{listStyle:'none'}}>
        { alunoLi }
      </ul>
    </div>
  )
}