import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const [numImparPar, setNumImparPar] = useState(0);
    const [imparPar, setImparPar] = useState(0);

    function calcFatorial (num) {
        if (!num) return 1;
        const n = parseInt(num);
        if (n < 0) return -1;
        if (n === 0) return 1;

        return calcFatorial(n-1) * n;

    }

    function calcImpaPar(number) {
        return number % 2;
    }

    useEffect(function () {
        setFatorial(calcFatorial(number))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number])



    useEffect(()=> {
       setImparPar(calcImpaPar(numImparPar));
    }, [numImparPar])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{ fatorial === -1 ? 'Não existe!!': fatorial }</span>
            </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02" />
                <div className="center">
                    <div>
                        <span className="text">Par ou Ímpar: </span>
                        <span className="text red">{imparPar === 0 ? 'Par' : 'Ímpar'}</span>
                    </div>
                    <input type="number" className="input" value={numImparPar} onChange={e => setNumImparPar(e.target.value)} />
                </div>
        </div>
    )
}

export default UseEffect
