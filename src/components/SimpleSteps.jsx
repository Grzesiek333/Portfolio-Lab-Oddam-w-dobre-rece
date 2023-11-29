import { Link } from 'react-router-dom';

export default function SimpleSteps() {
    return (
      <>
      <section className="SimpleSteps" id="SimpleSteps">
        <h1>Wystarczą 4 proste kroki</h1>
        <img className='img_SimpleSteps' src="src/assets/Decoration.svg"/>
          <div className="boxs_Simplesteps">
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-1.svg"/>
              <div className="title_SipmleStps">Wybierz rzeczy</div>
              <div className='line_SimpleSteps' />
              <div className='text_simpleSteps'>ubrania, zabawki, sprzęt i inne</div>
            </div>
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-2.svg"/>
              <div className="title_SipmleStps">Spakuj je</div>
              <div className='line_SimpleSteps' />
              <div className='text_simpleSteps'>skorzystaj z worków na śmieci</div>              
            </div>
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-3.svg"/>
              <div className="title_SipmleStps">Zdecyduj komu chcesz pomóc</div>
              <div className='line_SimpleSteps' />
              <div className='text_simpleSteps'>wybierz zaufane miejsce</div>              
            </div>
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-4.svg"/>
              <div className="title_SipmleStps">Zamów kuriera</div>
              <div className='line_SimpleSteps' />
              <div className='text_simpleSteps'>kurier przyjedzie w dogodnym terminie</div>              
            </div>
          </div>            
            <Link to="/logowanie" ><button className="main_button button_SimpleSteps">Oddaj rzeczy</button></Link>   
        </section>
      </>
    );
  }