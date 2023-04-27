import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import s from "./PokemonDetail.module.css"
//components
import Navbar from "../../navbar/Navbar";
//images
import pokecards from "../../../assets/pokecards.png"

const PokemonDetail = () => {
    const id = useParams()
    const navigate = useNavigate()
    const [detail, setDetail] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemon/${id.id}`)
        .then(response => setDetail(response.data))
    },[id])

    detail && console.log(detail)
    return(
        <div>
            <Navbar/>
            <div className={s.title}>
                <img src={pokecards} alt="Pokecards" /> 
            </div>
            <div className={s.container}>
                <h1 className={s.name}>{detail?.name.toUpperCase()}</h1>
                <div className={s.info}>
                    <img src={detail?.image} alt={detail?.name} />
                    <div className={s.grid}>
                        <div>
                            <h1 className={s.h1}>TYPES:</h1>
                            {
                                detail?.type?.map((e) => {
                                    return(
                                         <h3 className={s.gridItem}>{e.toUpperCase()}</h3>
                                    )
                                })
                            }
                            <h1 className={s.h1}>HP:</h1>
                            <h3 className={s.gridItem}>{detail?.hp}</h3>
                            <h1 className={s.h1}>First edition:</h1>
                            <h3 className={s.gridItem}>{detail?.firstedition ? "Yes" : "No"}</h3>
                        </div>
                        <div>
                            <h1 className={s.h1}>Expansion:</h1>
                            <h3 className={s.gridItem}>{detail?.expansion}</h3>
                            <h1 className={s.h1}>Rarity:</h1>
                            <h3 className={s.gridItem}>{detail?.rarity}</h3>
                            <h1 className={s.h1}>Price:</h1>
                            <h3 className={s.gridItem}>${detail?.price}</h3>
                            {/* <h1 className={s.h1}>Creation date:</h1>
                            <h3 className={s.gridItem}>{detail?.date}</h3> */}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default PokemonDetail;