export function reducer(state, action) {
  switch(action.type) {
      case 'number_add2':
          return { ...state, number: state.number + 2 }
      case 'login':
          return { ...state, user: { name: action.payload } }
      case 'mult_7':
          return {...state, number: state.number * 7}
      case 'div_25':
          return {...state, number: state.number / 25}
      case 'parse_int':
          return {...state, number: parseInt(state.number)}
      case 'num_recebido':
          return{...state, number: state.number + action.payload}
      default:
          return state
      } 
};