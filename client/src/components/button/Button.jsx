import { useNavigate } from "react-router-dom"
import s from "./Button.module.css"

const Button = ({name, click, disabled, icon, type, route}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        if(route){
            navigate(route)
        } else {
            click()
        }
    }

    return(
        <button type={type} onClick={handleClick} className={s.button} disabled={disabled}>{icon}{name}</button>
    )
}

export default Button;