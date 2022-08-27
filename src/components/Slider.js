import { useState } from "react"

const Slider = ({estadoPadre,customMethod}) => {

    const [] = useState(0)

    const handleChange = (e) => {
        customMethod(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange} type="range" step={10} />
        </>
    )
}
export default Slider