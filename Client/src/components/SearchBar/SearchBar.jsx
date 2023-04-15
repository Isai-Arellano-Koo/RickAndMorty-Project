import styles from './SearchBar.module.css'
import {useState} from 'react'
export default function SearchBar({onSearch}) {

   const [id, setId] =useState('')

   const handleChange = (event) => {
      setId(event.target.value)
      
   }
   
   return (
      <div>
         <input type='search' className={styles.input} onChange = {handleChange} />
         <button className={styles.boton} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
