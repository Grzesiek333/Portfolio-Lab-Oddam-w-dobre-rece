import supabase from "./services/supabase";
import { Link } from 'react-router-dom';
import { Menu } from "./components/HomeHeader";


export default function Register() {

  async function onSignUp(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    console.log(formElements);

    let { data, error } = await supabase.auth.signUp({
      email: formElements[0].value,
      password: formElements[1].value,
    });

    if (!error) {
      console.log('user created successfully');
      console.log(data);
      return;
    }

    console.error('something went wrong', error);
  }

  return (
    <>
  <Menu />
  <section id='register'>
    <h1>Załóż konto</h1>
    <img src="src/assets/Decoration.svg"/>
    <form onSubmit={onSignUp}>
      <input placeholder="email" />
      <input placeholder="hasło" type="password"  />
      <button>Sign up</button>
    </form>
  </section>
    </>
  )
}