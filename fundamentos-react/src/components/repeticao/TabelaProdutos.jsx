import React from "react";

import produtos from "../../data/produtos";
import './tabelaEstilo.css';

export default function TabelaProdutos (props) {
  const produtosTabela = produtos.map((produto) => {
    return (
      <tr key={ produto.id }>
        <td>{ produto.id }</td>
        <td>{ produto.nome }</td>
        <td>R$ { produto.preco.toFixed(2).replace('.', ',') }</td>
      </tr>
    )
  }) 

  return (
    <div>
      <h2>Tabela de preços</h2>
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            { produtosTabela }
          </tbody>
      </table>
    </div>
  )
}