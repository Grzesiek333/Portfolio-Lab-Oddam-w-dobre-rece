import supabase from "./services/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from "./components/HomeHeader";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setErrorText("Nieprawidłowy adres e-mail");
    } else {
      setErrorText("");
    }
  };
  async function onSignIn(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: formElements[0].value,
      password: formElements[1].value,
    });
    if (formElements[1].value.length < 6) {
      setErrorText("Hasło musi mieć co najmniej 6 znaków");
      return;
    }


    if (!error) {
      console.log('user logged successfully');
      console.log(data);

      navigate('/');
      return;
    }

    setErrorText('Nieprawidłowy login lub hasło');
    console.error('something went wrong', error);
  }

  return (
  <section className='register'>
    <Menu/>
    <div className="login_panel">
        <h1 className="h1_register">Zaloguj się</h1>
        <img src="src/assets/Decoration.svg" alt="Dekoracja"/>
    
    <form onSubmit={onSignIn}>
      <div className="form_register">
        <div className="inputns_form">          
          <label>Email:</label>
          <input name="email" onChange={handleEmailChange} />
          <label>Hasło:</label>
          <input name="password" type="password" />
          {errorText && <span style={{ color: 'red' }}>{errorText}</span>}
        </div>        
        <div className="buttons_input">
          <Link to="/rejestracja">Załóż konto</Link>
          <button type="submit">Zaloguj się</button> 
        </div>            
      </div>      
    </form>
    </div>
  </section>
  );
}
