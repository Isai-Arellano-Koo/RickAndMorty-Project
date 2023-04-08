import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
    const favorites = useSelector(state =>state.myFavorites); 

    return(
        <div>
            {favorites.map(character => {
                return (
                    <Card 
                        id = {character.id}
                        name = {character.name}
                        status = {character.status}
                        species = {character.species}
                        gender = {character.gender}
                        origin = {character.origin.name}
                        image = {character.image}
                    />
                )
            })}
        </div>
    )
};

export default Favorites;