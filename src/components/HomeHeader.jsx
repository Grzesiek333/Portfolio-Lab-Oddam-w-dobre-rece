import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
    return (
      <>
      <section className="HomeHeader">
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
              <li><Link to="">O co chodzi?</Link></li>
              <li><Link to="">O nas</Link></li>
              <li><Link to="">Fundacja i oranizacje</Link></li>
              <li><Link to="">Kontakt</Link></li>
            </ul>
          </nav>
          <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
          <img src="src/assets/Decoration.svg"/>
          
        </div>
      </section>
      </>
    );
  }