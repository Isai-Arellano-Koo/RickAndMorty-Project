const validation = (userData, errors, setErrors) => {

// ! VALIDACION EMAIL


    if (userData.email === '') {
      setErrors({...errors, email: 'Campo Obligatorio'});
    } else if (userData.email.length > 35) {
      setErrors({...errors, email: 'No puede superar los 35 caracteres'});
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      setErrors({...errors, email: 'Email invalido'});
    } else {
      setErrors({...errors, email: ''});
    }


    // ! VALIDACION PASSWORD

    if (!userData.password) {
        setErrors(prevErrors => ({
          ...prevErrors,
          password: 'Debe haber una constraseña'
        }));
      } else if (userData.password.length < 6) {
        setErrors(prevErrors => ({
          ...prevErrors,
          password: 'Contraseña muy corta'
        }));
      } else if (userData.password.length > 10) {
        setErrors(prevErrors => ({
          ...prevErrors,
          password: 'Maximo de caracteres alcanzado'
        }));
      } else if (!/[0-9]/.test(userData.password)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          password: 'La contraseña debe tener al menos 1 digito'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          password: ''
        }));
      }
}

export default validation;


