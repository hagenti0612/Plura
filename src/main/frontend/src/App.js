import Login from './components/login/login.js';
import Signin from './components/Signin/signin.js';
import Main from './components/mainpage/mainpage.js';
import Sidebar from './components/sidebar/sidebar.js';
import Chart from './components/chart/chart.js';
import Detail from './components/detail/detail.js';
import Admin_add from './components/register/register.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signin" element={<Signin/>}/>
        <Route exact path="/Chart" element={<Chart/>}/>
        <Route exact path="/Detail" element={<Detail/>}/>
        <Route exact path="/admin_add" element={<Admin_add/>}/>
        <Route path="/" element={<Main/>}/>

        
      </Routes>

    </div>

  );
}

export default App;