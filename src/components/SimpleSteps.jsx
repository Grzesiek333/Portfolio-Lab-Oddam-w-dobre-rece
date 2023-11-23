export default function SimpleSteps() {
    return (
      <>
      <section className="SimpleSteps">
        <h1>Wystarczą 4 proste kroki</h1>
        <img className='img_SimpleSteps' src="src/assets/Decoration.svg"/>
          <div className="boxs_Simplesteps">
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-1.svg"/>
              <text className="title_SipmleStps">Wybierz rzeczy</text>
              <div className='line_SimpleSteps' />
              <text>ubrania, zabawki, sprzęt i inne</text>
            </div>
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-2.svg"/>
              <text className="title_SipmleStps">Spakuj je</text>
              <div className='line_SimpleSteps' />
              <text>skorzystaj z worków na śmieci</text>              
            </div>
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-3.svg"/>
              <text className="title_SipmleStps">Zdecyduj komu chcesz pomóc</text>
              <div className='line_SimpleSteps' />
              <text>Zdecyduj komu chcesz pomóc</text>              
            </div>
            <div className="box_SimpleSteps">
              <img src="src/assets/Icon-4.svg"/>
              <text className="title_SipmleStps">Zdecyduj komu chcesz pomóc</text>
              <div className='line_SimpleSteps' />
              <text>Zdecyduj komu chcesz pomóc</text>              
            </div>
          </div>
            <button>Oddaj rzeczy</button>
   
        </section>
      </>
    );
  }