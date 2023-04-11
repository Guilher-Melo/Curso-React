import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle';

import { initialState, reducer } from '../../store';
import { number_add2, login } from '../../store/actions';


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
                    <button className="btn" onClick={() => number_add2(dispatch)}>+2</button>
                    <button className="btn" onClick={()=> login(dispatch, "Juca")}>Login</button>
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
