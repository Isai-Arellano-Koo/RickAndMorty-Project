import { useState } from "react";
import validation from "./validation";



const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const property= event.target.name
        const value = event.target.value

        setUserData({...userData,[property]: value})
        validation({...userData,[property]: value}, errors, setErrors)
        
    }
    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
        // alert('Login Existoso')
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input name="email" type='text' value={userData.email} onChange={handleChange}></input>
                    <span>{errors.email}</span>
                </div>
                
                <div>
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" value={userData.password} onChange={handleChange}></input>
                    <span>{errors.password}</span>
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}
export default Form;