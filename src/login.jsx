import supabase from "./services/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigation = useNavigate();

  async function onSignIn(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: formElements[0].value,
      password: formElements[1].value,
    });

    if (!error) {
      console.log('user logged successfully');
      console.log(data);

      navigation('/');
      return;
    }

    console.error('something went wrong', error);
  }

  return (
    <form onSubmit={onSignIn}>
        <div className="form_register">
              <div className="inputns_form">          
                <label>Email:</label>
                <input name="email" onChange={handleEmailChange} />
                <label>Hasło:</label>
                <input name="password" type="password" onChange={handlePasswordChange} />
                <label>Powtórz hasło:</label>                
                <input name="repeatPassword" type="password" onChange={handleRepeatPasswordChange} />
                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
              </div>
              <div className="buttons_input">
                <Link to="/logowanie">Zaloguj się</Link>
                <button type="submit">Załóż konto</button> 
              </div>            
          </div>

    </form>
  )
}
