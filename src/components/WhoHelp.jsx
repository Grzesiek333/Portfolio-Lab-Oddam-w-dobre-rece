import React, { useState, useEffect } from 'react';
import supabase from '../services/supabase.js';

function Fundaction() {
  const [fundactionData, setFundactionData] = useState([]);

  async function readFundaction() {
    let { data: fundaction, error } = await supabase.from('Fundaction').select('*');
    if (error) {
      console.error('Błąd podczas pobierania danych z Supabase:', error.message);
    } else {
      setFundactionData(fundaction);
    }
  }

  useEffect(() => {
    readFundaction();
  }, []); 

  return (
    <div>
      <div>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
      </div>
      <ul>
        {fundactionData.map((item) => (
          <li key={item.id}>{item.name}</li>
          
        ))}
      </ul>
    </div>
  );
}

function Organizations() {
  return (
    <div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </div>
    </div>
  )
}

function Fundraisers() {
  return (
    <div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </div>
    </div>
  )
}

export function WhoHelp() {
  const [activeSection, setActiveSection] = useState('fundaction');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section id='WhoHelp'>
      <div className="area_WhoHelp">
        <h1>Komu pomagamy?</h1>
        <img src="src/assets/Decoration.svg" />
        <div className="buttons_WhoHelp">
          <button onClick={() => handleButtonClick('fundaction')}>Fundacjom</button>
          <button onClick={() => handleButtonClick('organizations')}>Organizacjom pozarządowym</button>
          <button onClick={() => handleButtonClick('fundraisers')}>Lokalnym zbiórkom</button>
        </div>
        {activeSection === 'fundaction' && <Fundaction />}
        {activeSection === 'organizations' && <Organizations />}
        {activeSection === 'fundraisers' && <Fundraisers />}
      </div>
    </section>
  );
};
