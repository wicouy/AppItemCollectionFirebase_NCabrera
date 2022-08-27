import { useState } from "react"

const Contador = ({ estadoPadre , onAdd , stock, initial }) => {

    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
    }

    return (
        <div>
            <p id="parrafo">El Contador va : {contador}</p>
            <button onClick={sumar}>summar</button>
            <button onClick={confirmar}>confirmar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Contador