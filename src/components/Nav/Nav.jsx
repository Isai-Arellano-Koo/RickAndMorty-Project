import React from 'react';
import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'


export default function Nav(props) {
return (
    
        <div className={styles.navContainer}>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <SearchBar onSearch = {props.onSearch}/>
        </div>
)
}