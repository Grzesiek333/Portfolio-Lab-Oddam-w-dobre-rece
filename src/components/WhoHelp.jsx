import React, { useState, useEffect } from 'react';
import supabase from '../services/supabase.js';

function Fundaction() {
  const [fundactionData, setFundactionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Liczba elementów na stronie

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fundactionData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='description_WhoHelp'>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
      </div>      
      <ul>
        {currentItems.map((item) => (
          <div key={item.id} className='row_WhoHelp'>
            <div className='left_WhoHelp'>
              <li>{item.name}</li>
              <li>{item.target}</li>
            </div>
            <div className='right_WhoHelp'>
              <li>{item.items}</li>
            </div>
          </div>
        ))}
      </ul>           
      {fundactionData.length > itemsPerPage && (
        <div>
          {Array.from({ length: Math.ceil(fundactionData.length / itemsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
function Organizations() {
    const [OrganizationsData, setOrganizationsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Liczba elementów na stronie
  
    async function readOrganizations() {
      let { data: fundaction, error } = await supabase.from('Organizations').select('*');
      if (error) {
        console.error('Błąd podczas pobierania danych z Supabase:', error.message);
      } else {
        setOrganizationsData(fundaction);
      }
    }
  
    useEffect(() => {
      readOrganizations();
    }, []); 
   
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = OrganizationsData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div>
        <div className='description_WhoHelp'>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
        <ul>
        {currentItems.map((item) => (
          <div key={item.id} className='row_WhoHelp'>
            <div className='left_WhoHelp'>
              <li>{item.name}</li>
              <li>{item.target}</li>
            </div>
            <div className='right_WhoHelp'>
              <li>{item.items}</li>
            </div>
          </div>
        ))}
      </ul>    
        {OrganizationsData.length > itemsPerPage && (
        <div>
          {Array.from({ length: Math.ceil(OrganizationsData.length / itemsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
  function Fundraisers() {
    const [FundraisersData, setFundraisersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Liczba elementów na stronie
  
    async function readFundraisers() {
      let { data: fundaction, error } = await supabase.from('Fundraisers').select('*');
      if (error) {
        console.error('Błąd podczas pobierania danych z Supabase:', error.message);
      } else {
        setFundraisersData(fundaction);
      }
    }
  
    useEffect(() => {
      readFundraisers();
    }, []); 
   
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = FundraisersData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div>
        <div className='description_WhoHelp'>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
        <ul>
        {currentItems.map((item) => (
          <div key={item.id} className='row_WhoHelp'>
            <div className='left_WhoHelp'>
              <li>{item.name}</li>
              <li>{item.target}</li>
            </div>
            <div className='right_WhoHelp'>
              <li>{item.items}</li>
            </div>
          </div>
        ))}
      </ul>     
        {FundraisersData.length > itemsPerPage && (
        <div>
          {Array.from({ length: Math.ceil(FundraisersData.length / itemsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
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
