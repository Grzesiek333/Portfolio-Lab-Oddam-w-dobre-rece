import React, { useState } from "react";
import supabase from "./services/supabase";
import { Menu } from "./components/HomeHeader";
import { Link } from 'react-router-dom';

export default function Register() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [formElements, setFormElements] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const newPasswordError = repeatPassword && password !== repeatPassword ? "Hasła nie są takie same" : "";
    setPasswordError(newPasswordError);
  };

  const handleRepeatPasswordChange = (e) => {
    const newPassword = e.target.value;
    setRepeatPassword(newPassword);

    if (formElements.password && newPassword !== formElements.password.value) {
      setPasswordError("Hasła nie są takie same");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setEmailError("Nieprawidłowy adres e-mail");
    } else {
      setEmailError("");
    }
  };

  async function onSignUp(e) {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    setFormElements(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if (password.length < 6) {
      setPasswordError("Hasło musi mieć co najmniej 6 znaków");
      return;
    }

    if (password !== repeatPassword) {
      setPasswordError("Hasła nie są takie same");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Nieprawidłowy adres e-mail");
      return;
    }

    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (!error) {
      setRegistrationSuccess(true);
      console.log('Użytkownik utworzony pomyślnie');
      console.log(data);
    } else {
      console.error('Coś poszło nie tak', error);
    }
  }

  return (    
    <section id='register'>
      <Menu />
      <div className="login_panel">
        <h1 className="h1_register">Załóż konto</h1>
        <img src="src/assets/Decoration.svg" alt="Dekoracja"/>
        {registrationSuccess ? (
          <div className="success_register">
            <p>Konto zostało założone pomyślnie!</p>
          </div>
        ) : (
          <form onSubmit={onSignUp}> 
            <div className="form_register">
              <div className="inputns_form">          
                <label>Email:</label>
                <input name="email" onChange={handleEmailChange} />
                <label>Hasło:</label>
                <input name="password" type="password" onChange={handlePasswordChange} />
                <label>Powtórz hasło:</label>                
                <input name="repeatPassword" type="password" onChange={handleRepeatPasswordChange} />
                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
              </div>
              <div className="buttons_input">
                <Link to="/logowanie">Zaloguj się</Link>
                <button type="submit">Załóż konto</button> 
              </div>            
            </div>
          </form>
        )}
      </div>
    </section>     
  );
}
