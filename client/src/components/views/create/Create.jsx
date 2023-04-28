import { useState } from "react";
import axios from "axios";
//components
import Navbar from "../../navbar/Navbar";
//images
import pokecards from "../../../assets/pokecards.png";
//styles
import s from "./Create.module.css";

const Create = () => {

    const [form, setForm] = useState({
        name: "",
        hp: "",
        type: [],
        image: "",
        rarity: "",
        expansion: "",
        firstedition: true,
        price: 0,
    });

    const handleChange = (e) => {
        if(e.name === "type"){
            setForm({
                ...form,
                 type: type.push(e.target.value)
             })
        }
        setForm({
            ...form,
             [e.target.name]: e.target.value
         })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3001/pokemon", form)
        //mostrar mensaje de éxito 
    }

    return(
        <div>
            <Navbar/> 
            <div className={s.title}>
                <img src={pokecards} alt="Pokecards" /> 
            </div>
            <div className={s.container}>
                <form onSubmit={handleSubmit} className={s.form}>
                    <label >Name:</label>
                    <input type="text" onChange={handleChange} name="name"/>
                    <label >HP:</label>
                    <input type="text" onChange={handleChange} name="hp"/>
                    <label >Types:</label>
                    <input type="text" onChange={handleChange} name="type"/>
                    {/* <label >First edition:</label>
                    <input type="text" onChange={handleChange} name="firstedition"/> */}
                    <label >Rarity:</label>
                    <input type="text" onChange={handleChange} name="rarity"/>
                    <label >Expansion:</label>
                    <input type="text" onChange={handleChange} name="expansion"/>
                    <label >Price:</label>
                    <input type="number" onChange={handleChange} name="price"/>
                    <label >Image:</label>
                    <input type="text" onChange={handleChange} name="image"/>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default Create;