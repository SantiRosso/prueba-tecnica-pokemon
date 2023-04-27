import { useEffect, useState } from "react";
import axios from "axios";
//components
import NavBar from "../../navbar/Navbar";
import Card from "../../card/Card";
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

  pokemons && console.log(pokemons.data)

    return(
       <div className={s.container}>
          <div>
            <img src={pokecards} alt="pokecards" />
          </div>
          <NavBar/>
          {
            pokemons && pokemons?.data?.map((e) => {
              return(
                <Card name={e.name} type={e.type} image={e.image} id={e._id}/>
              )
            })
          }
        </div>
    )
}

export default Home;