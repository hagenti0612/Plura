import Login from './components/login/login.js';
import Signin from './components/Signin/signin.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signin" element={<Signin/>}/>
        </Routes>
    </div>

  );
}

export default App;
