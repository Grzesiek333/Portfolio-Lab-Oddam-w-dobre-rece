import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./login";
import Register from "./register";
import Logout from "./logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/logowanie" element={<Login />} />       
        <Route path="/rejestracja" element={<Register />} />   
        <Route path="/wylogowano" element={<Logout />} />   

      </Routes>
    </Router>
  );
}

export default App;