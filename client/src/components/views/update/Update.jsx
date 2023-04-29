import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//components
import Navbar from "../../navbar/Navbar";
//styles
import s from "./Update.module.css"
//images
import pokecards from "../../../assets/pokecards.png";
import Button from "../../button/Button";

const Update = () => {
    const id = useParams().id
    const [detail, setDetail] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemon/${id}`)
        .then(response => {
            setForm(response.data), setDetail(response.data)
        })
    },[id])

    const [form, setForm] = useState({
        name: "",
        hp: "",
        type: "",
        image: "",
        rarity: "",
        expansion: "",
        firstedition: true,
        price: "",
        _id: id
    });

    const handleChange = (e) => {
        if(e.target.name === "firstedition"){
            if(e.target.value === "Yes"){
                setForm({
                    ...form,
                    [e.target.name]: true,
                })
            }
            if(e.target.value === "No"){
                setForm({
                    ...form,
                    [e.target.name]: false,
                })
            } else {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                })
            }
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
        await axios.put("http://localhost:3001/pokemon", form)
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
                    <input className={s.input} type="text" onChange={handleChange} name="name" defaultValue={detail?.name}/>
                    <label className={s.label}>HP:</label>
                    <input className={s.input} type="number" onChange={handleChange} name="hp" defaultValue={detail?.hp}/>
                    <span className={s.error}>{errorMsg.hp}</span>
                    <label className={s.label}>Types:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="type" defaultValue={detail?.type}/>
                    <label className={s.label}>First edition:</label>
                    <label className={s.label}>Yes</label>
                    <input type="radio" onChange={handleChange} name="firstedition" defaultValue={"Yes"}/*  defaultChecked={detail?.firstedition} *//>
                    <label className={s.label}>No</label>
                    <input type="radio" onChange={handleChange} name="firstedition" defaultValue={"No"}/*  defaultChecked={!detail?.firstedition} *//>
                    <label className={s.label}>Rarity:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="rarity" defaultValue={detail?.rarity}/>
                    <label className={s.label}>Expansion:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="expansion" defaultValue={detail?.expansion}/>
                    <label className={s.label}>Price:</label>
                    <input className={s.input} type="number" onChange={handleChange} name="price" defaultValue={detail?.price}/>
                    <label className={s.label}>Image:</label>
                    <input className={s.input} type="text" onChange={handleChange} name="image" defaultValue={detail?.image}/>
                    <Button type="submit" name="Update"/>
                </form>
            </div>
        </div>
    )
}

export default Update;