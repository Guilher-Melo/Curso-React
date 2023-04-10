import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
    user: [],
    number: 0
};

function reducer(state, action) {
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                <span className="text">{state.user.name}</span>
                )
                 : (
                 <span className="text">Sem usuário</span>
                 )}
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => dispatch({type: 'number_add2'})}>+2</button>
                    <button className="btn" onClick={()=> dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                </div>

                <div>
                    <button className="btn" onClick={() => dispatch({type:'mult_7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type:'div_25'})}>/25</button>
                </div>

                <div>
                    <button className="btn" onClick={()=> dispatch({type: 'parse_int'})}>Nº inteiro</button>
                    <button className="btn" onClick={()=> dispatch({type: 'num_recebido', payload: 5})}>+5</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
