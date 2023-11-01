import { useEffect, useState } from "react";
import Cards from "../Cards/Cards"
import { useDispatch, useSelector } from "react-redux";
import { orderCountries, getCountries, filterCountries, orderPupulation, filterByActivity } from "../Redux/actions";
import Nav from "../Nav/Nav";
import style from './Home.module.css';
import axios from "axios";

const Home = () => {

  const [pagina, setPagina] = useState(1);
  const [input, setInput] = useState(1);
  const porPagina = 10; // numero de elementos por pagina

  // para calcular el indice de inicio y fin para la página actual
  const startIndex = (pagina - 1) * porPagina;
  const endIndex = startIndex + porPagina;

  const Activities = useSelector((state) => state.Activities)
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const value = event.target.value;
    dispatch(orderCountries(value))

  };
  const orderPopulation = (event) => {
    const value = event.target.value;
    dispatch(orderPupulation(value))
  }

  const handlerFilterByContinent = (event) => {
    const value = event.target.value;
    console.log(value)
    dispatch(filterCountries(value))
    setPagina(1)
    setInput(1)
  }

  const handlerFilterByActivity = (event) => {
    const value = event.target.value;
    dispatch(filterByActivity(value))
  };

  const handlerButton = async () => {
    const toDelete = Activities[Activities.length - 1]
    const { data } = await axios.delete(`http://localhost:3001/activities/toDelete?name=${toDelete}`)
    console.log(data)
  };

  useEffect(() => {
    dispatch(getCountries());

  }, []);
  
  return (
    <div className={style.container}>
      <h1>🏡</h1>
      <Nav />
      <select onChange={orderPopulation}>
        <option value="all">Poblacion</option>
        <option value="min-max">min-max</option>
        <option value="max-min">max-min</option>
      </select>

      <select onChange={handleOrder}>
        <option>Orden</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select onChange={handlerFilterByContinent}>
        <option value="Filtern't">Filtrar por continente</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="North America">America del Norte</option>
        <option value="South America">America del Sur</option>
        <option value="Antarctica">Antartica</option>
      </select>

      <select onChange={handlerFilterByActivity}>
        <option disabled selected >Filtrar actividad por temporada</option>
        <option value="Summer">Verano</option>
        <option value="Autumn">Otoño</option>
        <option value="Spring">Primavera</option>
        <option value="Winter">Invierno</option>
      </select>

      <Cards pagina={pagina}
        setPagina={setPagina}
        porPagina={porPagina}
        startIndex={startIndex}
        endIndex={endIndex}
        input={input}
        setInput={setInput} />

      <button onClick={handlerButton}>Traer</button>
    </div>
  )
}

export default Home;