import { useState } from "react";
import axios from "axios";
//components
import Navbar from "../../navbar/Navbar";
//images
import pokecards from "../../../assets/pokecards.png";
//styles
import s from "./Create.module.css";
import Button from "../../button/Button";
import Footer from "../../footer/Footer";

const Create = () => {

    const [form, setForm] = useState({
        name: "",
        hp: 0,
        type: [],
        image: "",
        rarity: "",
        expansion: "",
        firstedition: true,
        price: 0,
    });

    const handleChange = (e) => {
        if(e.target.name === "firstedition"){
            if(e.target.value === "Yes"){
                setForm({
                    ...form,
                     firstedition: true,
                })
            } else {
                setForm({
                    ...form,
                     firstedition: false,
                })
            }
        } else {
            setForm({
            ...form,
             [e.target.name]: e.target.value
         })
        }
    }

    const validate = (form) => {
        let errors = {};
        if (parseInt(form.hp) % 10 !== 0) {
            errors.hp = "-Health must be a multiple of 10.";
        }
        return errors;
    }   

    const errorMsg = validate(form);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(Object.values(errorMsg).length){
            return alert(Object.values(errorMsg).join('\n'), "error");
        }
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
                    <label className={s.label}>Name:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="name"/>
                    <label className={s.label}>HP:</label>
                    <input className={s.input} type="number" onChange={handleChange} name="hp"/>
                    <span className={s.error}>{errorMsg.hp}</span>
                    <label className={s.label}>Types:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="type"/>
                    <label className={s.label}>First edition:</label>
                    <label className={s.label}>Yes</label>
                    <input type="radio" onChange={handleChange} name="firstedition" value={"Yes"}/>
                    <label className={s.label}>No</label>
                    <input type="radio" onChange={handleChange} name="firstedition" value={"No"}/>
                    <label className={s.label}>Rarity:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="rarity"/>
                    <label className={s.label}>Expansion:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="expansion"/>
                    <label className={s.label}>Price:</label>
                    <input className={s.input} type="number" onChange={handleChange} name="price"/>
                    <label className={s.label}>Image:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="image"/>
                    <Button type="submit" name="Create"/>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Create;