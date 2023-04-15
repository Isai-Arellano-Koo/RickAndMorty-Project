import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";
import styles from './Favorites.module.css';
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (value) => {
    setAux(!aux);
    dispatch(orderCards(value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div>
        <label htmlFor="order-select">Ordenar por:</label>
        <select id="order-select" onChange={(e) => handleOrder(e.target.value)}>

          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter-select">Filtrar por género:</label>
        <select id="filter-select" onChange={handleFilter}>
          <option value="">Todos</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
      <div className={styles.cardsContainer}>
        {favorites.map((character) => {
          return (
            <Card
              key={character.id}  
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name} // <-- Accede al nombre del origen
              image={character.image}
              isFav={true}
              showClose = {false} // <-- Establece isFav en true para mostrar el botón de eliminar
            />
          );
        })}
      </div>
    </div> 
  );
};

export default Favorites;
