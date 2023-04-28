import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//components
import Navbar from "../../navbar/Navbar";
//styles
import s from "./Update.module.css"
//images
import pokecards from "../../../assets/pokecards.png";

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
        type: [],
        image: "",
        rarity: "",
        expansion: "",
        firstedition: true,
        price: "",
        _id: id
    });

    const handleChange = (e) => {
        if(e.target.name === "firstedition"){
            console.log(e.target.value)
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
            }
        } else if(e.target.name === "type"){
            setForm({
                ...form,
                 type: [...form.type, e.target.value]
             })
        } else {
            setForm({
            ...form,
             [e.target.name]: e.target.value
         })
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
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
                    <label >Name:</label>
                    <input type="text" onChange={handleChange} name="name" defaultValue={detail?.name}/>
                    <label >HP:</label>
                    <input type="number" onChange={handleChange} name="hp" defaultValue={detail?.hp}/>
                    <label >Types:</label>
                    <input type="text" onChange={handleChange} name="type" defaultValue={detail?.type}/>
                    <label >First edition:</label>
                    <label >Yes</label>
                    <input type="radio" onChange={handleChange} name="firstedition" defaultValue={"Yes"}/*  defaultChecked={detail?.firstedition} *//>
                    <label >No</label>
                    <input type="radio" onChange={handleChange} name="firstedition" defaultValue={"No"}/*  defaultChecked={!detail?.firstedition} *//>
                    <label >Rarity:</label>
                    <input type="text" onChange={handleChange} name="rarity" defaultValue={detail?.rarity}/>
                    <label >Expansion:</label>
                    <input type="text" onChange={handleChange} name="expansion" defaultValue={detail?.expansion}/>
                    <label >Price:</label>
                    <input type="number" onChange={handleChange} name="price" defaultValue={detail?.price}/>
                    <label >Image:</label>
                    <input type="text" onChange={handleChange} name="image" defaultValue={detail?.image}/>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;