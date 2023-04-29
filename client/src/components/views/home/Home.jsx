import { useEffect, useState } from "react";
import axios from "axios";
//components
import NavBar from "../../navbar/Navbar";
import Card from "../../card/Card";
import Footer from "../../footer/Footer";
//images
import pokecards from "../../../assets/pokecards.png"
//styles
import s from "./Home.module.css"

const Home = () => {

  const [pokemons, setPokemons] = useState()

  const getPokemons = async () => {
    setPokemons(
      await axios.get("http://localhost:3001/pokemon")
    )
  }

  useEffect(()=>{
    if(!pokemons){
      getPokemons()
    }
  })

    return(
       <div className={s.container}>
          <div>
            <img src={pokecards} alt="pokecards" />
          </div>
          <NavBar/>
          <div className={s.cards}>
            {
              pokemons && pokemons?.data?.map((e) => {
                return(
                  <Card name={e.name} type={e.type} image={e.image} id={e._id}/>
                )
              })
            }
          </div>
          <Footer/>
        </div>
    )
}

export default Home;