import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import {Routes, Route} from 'react-router-dom'
import About from './views/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';



// import characters, { Rick } from './data.js';


function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate()
   const [access, setAccess] = useState(false);


   // App.js
useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);

// ! CRENDENCIALES
const email = 'isai@mail.com'
const password = 'password123' 

// ! FUNCION LOGIN

const login = (userData) => {
   if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate('/home');
   } else {
      alert('Credenciales incorrectas')
   }
}

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
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} showClose = {true} />} />
            <Route path='/about' element={<About />}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='/detail/:id' element={<Detail />}/>


            
         </Routes>
         
      </div>
   );

 
}


export default App;
