import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
export default function Details() {
    const [character, setCharacters] = useState(null); // Initialize character as null
    const {id} = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacters(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
     }, [id]);
     
     // Add a condition to check if character is null
     if (character === null) {
        return <div>Loading...</div>
     }

     return(
        <div>
            <img src={character.image} alt='imagen rick and morty'/>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin.name}</h2>
        </div>
     )
}

