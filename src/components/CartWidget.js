import { NavLink } from "react-router-dom"
import { useCarrito } from "./CustomProvider"

const CartWidget = ({ type }) => {

    const { cantidad } = useCarrito()

    // return (
    //     <NavLink to="/cart">
    //         <span className="material-symbols-outlined">
    //             shopping_cart
    //         </span>
    //         {cantidad}
    //     </NavLink>
    // )

    return (
        <>
            {type == "header" ? (
                <NavLink to="/cart">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    {cantidad}
                </NavLink>
            ) : <></> }
        </>
    )
}
export default CartWidget