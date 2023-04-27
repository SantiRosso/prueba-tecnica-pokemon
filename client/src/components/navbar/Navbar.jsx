import { Link } from "react-router-dom";
//images
import pokedex from "./pokedex.png"
//styles
import s from "./Navbar.module.css";
//components
import Button from "../button/Button";

const NavBar = () => {

    return(
        <div className={s.navBar}>
            <Link to="/">
                <img src={pokedex} alt="pokedex" className={s.image}/>
            </Link>
            <Button name="Create Pokemon" route="/create"/>
        </div>
    )
}

export default NavBar;