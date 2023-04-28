import { Link } from "react-router-dom"
//styles
import s from "./Card.module.css"

const Card = ({name, type, image, id}) => {

    return(
        <Link className={s.link} to={`/pokemon-detail/${id}`}>
            <div className={s.card}>
                <div className={s.divImage}>
                    <img src={image} alt={name} className={s.image}/>
                </div>
                
                <h4>{name.toUpperCase()}</h4>
                {
                    type?.map((e) => {
                        return(
                            <span className={s.types}>{e.toUpperCase()}</span>
                        )
                    })
                }
            </div>
        </Link>
    )
}
export default Card;