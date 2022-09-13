import { useState } from "react";
import "./Counter.css"

const Counter = ({numero ,stock}) => {
    const [contador, setContador] = useState(numero);
    const suma = () => { 
        setContador(contador + 1)
    }
    const resta = () => {
        setContador(contador - 1)
    }
    return(
        <div className="counter-container">
        <div>Cantidad</div>
        <div className="buttons-contianer">
            <button disabled={contador <= numero} onClick={resta} >-</button>
            <h2>{contador}</h2>
            <button disabled={contador >= stock} onClick={suma} >+</button>
        </div>
        <button className="button-agregar">Agregar</button>
        </div>
    )
}

export default Counter;