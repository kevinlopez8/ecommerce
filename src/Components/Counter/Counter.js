import { useState } from "react";
import "./Counter.css"

const Counter = ({numero}) => {
    const [contador, setContador] = useState(0);
    const suma = () => { 
        setContador(contador + 1)
    }
    const resta = () => {
        setContador(contador - 1)
    }
    if (numero === 0){

    }
    return(
        <div className="counter-container">
        <div>Contador</div>
        <div className="buttons-contianer">
            <button onClick={resta} >-</button>
            <h2>{contador}</h2>
            <button onClick={suma} >+</button>
        </div>
        </div>
    )
}

export default Counter;