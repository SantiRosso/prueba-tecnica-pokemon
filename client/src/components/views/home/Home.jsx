import NavBar from "../../navbar/Navbar";
import Card from "../../card/Card";

const Home = () => {
    return(
       <div>
        <NavBar/>
        <Card name={"Santi"} types={["fuego", "hielo"]} image={"https://cn.i.cdn.ti-platform.com/content/1149/pokemon-sol-y-luna-ultraleyendas/showpage/ve/showsquare.a6a9b623.png?imwidth=420"}/>
        Home
        </div>
    )
}

export default Home;