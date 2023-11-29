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
      <input placeholder="email" />
      <input placeholder="password" type="password"  />
      <button>Sign in</button>
    </form>
  )
}
