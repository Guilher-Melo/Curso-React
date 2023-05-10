// Action Creator
import ACTION_TYPES from "./actionsTypes";

export function alterarNumeroMinimo(novoNumero) {
  return{
    type: ACTION_TYPES.NUM_MIN_ALTERADO,
    payload: novoNumero
  };
};

export function alterarNumeroMaximo(novoNumero) {
  return{
    type: ACTION_TYPES.NUM_MAX_ALTERADO,
    payload: novoNumero
  };
};