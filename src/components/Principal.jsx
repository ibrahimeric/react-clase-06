import React, { useEffect, useState } from 'react'
import Clima from './Clima';
import '../css/Principal.css'



function Principal() {

    const titulo = 'Soy App - El padre';
    const [count, setCount] = useState(1)

    useEffect(() => {
        //logica
        console.log('Se cambio count')
    }, [count])

    function cambiarNro() {
        setCount(count + 1);
    }

    function cambiarNro2() {
        setCount(count + 1);
    }



    return (
        <>
            <div className='card'>
                <h1>{titulo}</h1>

                <Clima />
                <h2>{count}</h2>
                <button onClick={cambiarNro}>
                    cambiarNro
                </button>
                <button onClick={cambiarNro2}>
                    cambiarNro2
                </button>
            </div>
        </>
    )
}

export default Principal;
