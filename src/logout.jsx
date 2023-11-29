import { Menu } from "./components/HomeHeader";
import { Link } from 'react-router-dom';

export default function Logout() {
    return (
    <section className='logout'>
      <Menu />
      <div className="logout_panel">
        <h1 className="h1_register">Wylogowanie nastąpiło pomyślnie!</h1>
        <img src="src/assets/Decoration.svg" alt="Dekoracja"/>
        <Link to="/"><button className="button_logout">Strona główna</button></Link> 
      </div>  
    </section>
    );
  }