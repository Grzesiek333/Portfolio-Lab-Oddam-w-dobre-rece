import React, { useState, useEffect } from 'react';
import supabase from '../services/supabase';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  function validateName(name) {
    const re = /^\S+$/;
    return re.test(name);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateMessage(message) {
    return message.length >= 120;
  }

  useEffect(() => {
    if (name.length > 0 && !validateName(name)) {
      setNameError('Imię powinno być jednym wyrazem, bez spacji.');
    } else {
      setNameError('');
    }
  }, [name]);

  useEffect(() => {
    if (email.length > 0 && !validateEmail(email)) {
      setEmailError('Podaj poprawny adres email.');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (message.length > 0 && !validateMessage(message)) {
      setMessageError('Wiadomość musi mieć co najmniej 120 znaków.');
    } else {
      setMessageError('');
    }
  }, [message]);

  async function onSaveMessage(e) {
    e.preventDefault();
  
    if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
      return; // Nie wysyłaj wiadomości, jeśli są błędy walidacji
    }
  
    const { data, error } = await supabase
      .from('Form_contact')
      .insert([
        {
          message: message,
          email: email,
          name: name,
        },
      ])
      .select();
  
    if (!error) {
      console.log('Wiadomość została dodana pomyślnie');
      console.log(data);
  
      setSubmitted(true); // Ustaw potwierdzenie wysłania wiadomości
  
      // Resetuj pola formularza po poprawnym przesłaniu wiadomości
      setName('');
      setEmail('');
      setMessage('');
  
      return;
    }
  
    console.error('Coś poszło nie tak', error);
  }
  return (
    <>
      <section className="Contact container" id="Contact">
        <div className="Form_Contact">
          <h1>Skontaktuj się z nami</h1>
          <img src="src/assets/Decoration.svg" alt="Dekoracja" />
          {submitted ? (
            <p id='message_sended'>Dziękujemy, wiadomość została wysłana.</p>
          ) : (
          <form onSubmit={onSaveMessage}>
            <div className="firstLine_Form">
              <label htmlFor="name">Wpisz swoje imię:
              <br />
              <input
                type="text"
                id="name"
                placeholder="Krzysztof"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span style={{ color: 'red' }}>{nameError}</span>
              </label>
              
              <br />
              <label htmlFor="email">
                Wpisz swój email:              
              <br />
              <input
                id="email"
                type="email"
                placeholder="abc@xyz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span style={{ color: 'red' }}>{emailError}</span>
              </label>              
            </div>
            <div className="secondLine_Form">
              <label htmlFor="message">Wpisz swoją wiadomość:</label>
              <br />
              <textarea
                className="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span style={{ color: 'red' }}>{messageError}</span>
            </div>
            <div className="thridLine_Form">
              <button type="submit" id="button_form_contact">
                Wyślij
              </button>
            </div>
          </form>
          )}
        </div>
      </section>
      <section className="footer container">
        Copyright by Coders Lab
        <div>
          <img
            className="social"
            src="src/assets/Facebook.svg"
            alt="Facebook"
          />
          <img
            className="social"
            src="src/assets/Instagram.svg"
            alt="Instagram"
          />
        </div>
      </section>
    </>
  );
}
