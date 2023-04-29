import { useNavigate } from "react-router-dom"
import s from "./Button.module.css"

const Button = ({name, route, type}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        if(route){
            navigate(route)
        }
    }

    return(
        <button onClick={handleClick} className={s.button} type={type}>{name}</button>
    )
}

export default Button;