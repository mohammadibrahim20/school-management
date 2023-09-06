import { NavLink } from "react-router-dom"


const ButtonNav = ({ text }) => {
    return (
        <li> <NavLink className="btn-custom hover:bg-white hover:text-blue-500 " to={text === "home" ? "/": text }>{text}</NavLink></li>
    )
}

export default ButtonNav