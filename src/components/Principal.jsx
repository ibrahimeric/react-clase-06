import React, { useState } from 'react'


function Principal() {
    const [count, setCount] = useState(0)
    const [estaActivado, setEstaActivado] = useState(false)
    const [estaLloviendo, setEstaLloviendo] = useState(false)
    const titulo = 'Mi State';
    const incrementar = () => {
        setCount(count + 1);
        console.log('Nuestro contador ahora vale: ', count);
    }
    const cambiarClima = () => {
        setEstaLloviendo(!estaLloviendo);
    }


    return (
        <>
            {estaActivado === true ?
                <div className='card'>
                    <button onClick={incrementar}>
                        count es {count}
                    </button>
                </div>
                :
                <h2>NO ESTA ACTIVADO</h2>
            }
        </>
    )
}

export default Principal;
