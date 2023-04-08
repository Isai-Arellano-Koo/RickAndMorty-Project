import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css' 

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);
  
    return (
      <div className={styles.cardsContainer}>
        {favorites.map((character) => {
          return (
            <Card
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
    );
  };
  
  export default Favorites;