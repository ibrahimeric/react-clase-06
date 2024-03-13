import React from "react";
import { useState } from "react";

const Clima = () => {
    const [count, setCount] = useState(0)
    // const [estaActivado, setEstaActivado] = useState(false)
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
        <div>
            <h1>{titulo}</h1>
            {estaLloviendo === true ?
                <h3>
                    LLUVIA TORRENCIAL 🌧️🌧️🌧️🌧️🌧️💧☔
                </h3>
                :
                <h2>HAY SOL🌅🌅🌅☀️⚡</h2>
            }
            <button onClick={cambiarClima}>cambiarClima</button>
        </div>
    )
}

export default Clima
