import { useState } from "react";
import "./Counter.css"

const Counter = ({stock}) => {
    const [contador, setContador] = useState(0);
    const suma = () => { 
        setContador(contador + 1)
    }
    const resta = () => {
        setContador(contador - 1)
    }
    return(
        <div className="counter-container">
        <div>Contador</div>
        <div className="buttons-contianer">
            <button disabled={contador <= 0} onClick={resta} >-</button>
            <h2>{contador}</h2>
            <button disabled={contador >= stock} onClick={suma} >+</button>
        </div>
        </div>
    )
}

export default Counter;