import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import {Routes, Route} from 'react-router-dom'
import About from './views/About.jsx'
import Detail from './components/Detail/Detail.jsx';



// import characters, { Rick } from './data.js';


function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data}) => {
         if (data.name && !characters.find((character)=>character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            console.log('error')
            window.alert('PERSONAJE REPETIDO O NO ENCONTRADO!');
         }
      })
      .catch(error => {
         console.error(error);
         alert('No se encontro el personaje con ese ID!');
       });
   };

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>


            
         </Routes>
         
      </div>
   );

 
}


export default App;
