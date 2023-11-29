import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
  const scrollToSimpleSteps = () => {
    const section = document.getElementById('SimpleSteps');
    if (section) {
      window.scrollTo({top: section.offsetTop, behavior: 'smooth' });
    }
  }
  const scrollToAboutUs = () => {
    const section = document.getElementById('AboutUs');
    if (section) {
      window.scrollTo({top: section.offsetTop, behavior: 'smooth' });
    }
  }
  const scrollToWhoHelp = () => {
    const section = document.getElementById('WhoHelp');
    if (section) {
      window.scrollTo({top: section.offsetTop, behavior: 'smooth' });
    }
  }
  const scrollToContact = () => {
    const section = document.getElementById('Contact');
    if (section) {
      window.scrollTo({top: section.offsetTop, behavior: 'smooth' });
    }
  }
  return (
    <>
    <nav className="menu-top">
    <ul>
      <Link to="/logowanie">Zaloguj</Link>
      <Link to="/rejestracja">Załóż konto</Link>
    </ul>
  </nav>
  <nav className="menu">
    <ul>
      <Link to="/">Start</Link>
      <li onClick={scrollToSimpleSteps}>O co chodzi?</li>
      <li onClick={scrollToAboutUs}>O nas</li>
      <li onClick={scrollToWhoHelp}>Fundacja i oranizacje</li>
      <li onClick={scrollToContact}>Kontakt</li>
    </ul>
  </nav>
  </>
  )
}
export default function HomeHeader() {
    return (
      <>
      <section className="HomeHeader container">
        <div style={{backgroundImage: "url('src/assets/Home-Hero-Image.jpg')", backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>          
        </div>
        <div>
        <Menu />
          <div className='titleAndButtons_header'>
          <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
          <img src="src/assets/Decoration.svg"/>
          <div className='buttons_header'>
          <Link to="/logowanie" ><button className='main_button'>ODDAJ<br /> RZECZY</button></Link>
          <Link to="/logowanie"><button className='main_button'>ZORGANIZUJ<br /> ZBIÓRKĘ</button></Link>
          </div> 
          </div>         
        </div>
      </section>
      </>
    );
  }