import Login from './components/login/login.js';
import Signin from './components/Signin/signin.js';
import Main from './components/mainpage/mainpage.js';
import Sidebar from './components/sidebar/sidebar.js';
import Chart from './components/chart/chart.js';
import Detail from './components/detail/detail.js';
import Admin_add from './components/register/register.js';
import Recent from './components/recent/recent.js';
import Want from './components/want/want.js';
import MyPage from './components/mypage/mypage.js';
import Playlist from './components/playlist/playlist.js';
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
        <Route exact path="/Recent" element={<Recent/>}/>
        <Route exact path="/Want" element={<Want/>}/>
        <Route exact path="/mypage" element={<MyPage/>}/>
        <Route exact path="/Playlist" element={<Playlist/>}/>
        <Route exact path="/admin_add" element={<Admin_add/>}/>
        <Route path="/" element={<Main/>}/>

        
      </Routes>

    </div>

  );
}

export default App;