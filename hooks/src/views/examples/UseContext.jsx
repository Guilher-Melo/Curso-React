import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import { DataContext } from '../../data/DataContext';

const UseContext = (props) => {

    const context = useContext(DataContext);

    function addNumber (n) {
        context.setState({
            ...context.state,
            number: context.state.number + n
        });
    }
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                
                <div>
                    <button onClick={()=> addNumber(-1)} className='btn'>-1</button>
                    <button onClick={()=> addNumber(1)} className='btn'>+1</button>
                </div>
            </div>

        </div>
    )
}

export default UseContext
