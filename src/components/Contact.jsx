
export default function Contact() {
    return (   
    <>   
      <section className="Contact container" id="Contact">
        <div className="Form_Contact">
            <h1>Skontaktuj się z nami</h1>
            <img src="src/assets/Decoration.svg" />
            <div className="firstLine_Form">
                <label id="name">Wpisz swoje imię:
                    <br />
                    <input placeholder="Krzysztof" />
                </label>
                <label id="email">Wpisz swój email:
                    <br />
                    <input placeholder="abc@xyz.com" />
                </label>                
            </div>
            <div className="secondLine_Form">
                <label id="message">Wpisz swoją wiadomość:
                    <br />
                    <textarea className="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                </label>               
            </div>
            <div className="thridLine_Form">
            <button id="button_form_contact">Wyślij</button>
            </div>
        </div>                
      </section> 
      <section className="footer container">
        Copyright by Coders Lab
        <div>
        <img className="social" src="src/assets/Facebook.svg"/>
        <img className="social" src="src/assets/Instagram.svg"/>        
        </div>
      </section> 
    </>        
    );
  }