import React, { useState } from 'react';

function Fundaction() {
  return ( 
    <div>
        <div>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
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
