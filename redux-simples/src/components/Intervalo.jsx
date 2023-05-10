import "./intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

function Intervalo(props) {
  const {min, max} = props;
  return(
    <Card title ="Intervalo de números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={min} onChange={e => props.alterarMin(Number(e.target.value))}/>
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" value={max} onChange={e => props.alterarMax(Number(e.target.value))}/>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  };
};

function mapDispatchtoProps(dispatch) {
  return {
    alterarMin(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMax(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Intervalo);