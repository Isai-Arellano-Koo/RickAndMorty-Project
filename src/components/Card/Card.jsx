import styles from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
   return (
      <div className={styles.cardContainer}>
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
