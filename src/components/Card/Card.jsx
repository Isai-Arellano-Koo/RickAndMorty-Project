import styles from './Card.module.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';


function Card(props) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite  = (id) => {
      if(isFav) {
         setIsFav(false);
         props.removeFavorite(id);
      } else {
         setIsFav(true);
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   return (
      <div className={styles.cardContainer}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button className={styles.cardButton} onClick={() => props.onClose(props.id)}>X</button>
         <h2>Id: {props.id}</h2>
         <img className={styles.image} src={props.image} alt='' />
         <Link to={`/detail/${props.id}`}>
         <h2>Name: {props.name}</h2>
         </Link>
         <h2>Status: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
