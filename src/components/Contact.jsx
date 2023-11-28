import React, { useState } from 'react';
import supabase from '../services/supabase';

export default function Contact(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async function onSaveMessage(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const emailValue = formElements[1].value;

    if (!validateEmail(emailValue)) {
      setEmailError('Podaj poprawny adres email.');
      return;
    }

    const { data, error } = await supabase
      .from('Form_contact')
      .insert([
        {
          message: formElements[2].value,
          email: formElements[1].value,
          name: formElements[0].value,
        }
      ])
      .select();

    if (!error) {
      console.log('Wiadomość została dodana pomyślnie');
      console.log(data);

      setEmailError('');
      setSubmitted(true); // Ustaw potwierdzenie wysłania wiadomości

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
              </label>
            </div>
            <div className="secondLine_Form">
              <label htmlFor="message">Wpisz swoją wiadomość:</label>
              <br />
              <textarea
                className="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            <div className="thirdLine_Form">
              <button type="submit" id="button_form_contact">
                Wyślij
              </button>
            </div>
          </form>
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
