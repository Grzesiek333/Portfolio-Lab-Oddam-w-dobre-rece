import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
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
    return (
      <>
      <section className="HomeHeader container">
        <div style={{backgroundImage: "url('src/assets/Home-Hero-Image.jpg')", backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>          
        </div>
        <div>
          <nav className="menu-top">
            <ul>
              <li><Link to="/logowanie">Zaloguj</Link></li>
              <li><Link to="/rejestracja">Załóż konto</Link></li>
            </ul>
          </nav>
          <nav className="menu">
            <ul>
              <li><Link to="">Start</Link></li>
              <li onClick={scrollToSimpleSteps}>O co chodzi?</li>
              <li onClick={scrollToAboutUs}>O nas</li>
              <li><Link to="">Fundacja i oranizacje</Link></li>
              <li><Link to="">Kontakt</Link></li>
            </ul>
          </nav>
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