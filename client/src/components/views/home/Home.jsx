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

  pokemons && console.log(pokemons)

    return(
       <div className={s.container}>
          <div>
            <img src={pokecards} alt="pokecards" />
          </div>
          <NavBar/>
          {
            pokemons?.lenght ? pokemons?.map((e) => {
              return(
                <Card name={e.name} types={e.types} image={e.image}/>
              )
            }) : <h1>Cargando</h1>
          }
          <Card name={"Santi"} types={["fuego", "hielo"]} image={"https://cn.i.cdn.ti-platform.com/content/1149/pokemon-sol-y-luna-ultraleyendas/showpage/ve/showsquare.a6a9b623.png?imwidth=420"}/>
        </div>
    )
}

export default Home;