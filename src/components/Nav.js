import { Link , NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const Nav = ({ type }) => {
  return (
      <nav>
        <NavLink to="/categoria/fainases">fainases</NavLink>
        <NavLink to="/categoria/pizzas">pizzas</NavLink>
        {type === "header" ? <CartWidget /> : null}
        <CartWidget type={type}/>
      </nav>
  )
}

export default Nav