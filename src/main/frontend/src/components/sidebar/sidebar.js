import React from "react";
import './sidebar.css'
import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import musicimg from '../../img/musicimg.jpg'
import profile from '../../img/profile.svg'
import loginbtn from '../../img/loginbtn.svg'
import signinbtn from '../../img/signinbtn.svg'
import { Link } from "react-router-dom";

import side1 from'../../img/side (1).svg'
import side2 from'../../img/side (2).svg'
import side3 from'../../img/side (3).svg'
import side4 from'../../img/side (4).svg'
import side5 from'../../img/side (5).svg'
import side6 from'../../img/side (6).svg'

function Sidebar(){
    return(
        <div className="menu">
            <img className="logo" src={logo}></img>
            <div className="searchplace">
            <img className="search" src={search} onClick={()=>{alert('검색결과가 존재하지 않습니다.')}}></img>
                <input placeholder="PLURA 검색" type={'text'} className='searchbox'></input>
            </div>
            <div className="side_profile">
                <img src={profile}></img>
                <div className="guide">로그인이 필요합니다</div>
            </div>
            <div className="login_btns">
                <Link to="/Login">
                    <img src={loginbtn}></img>
                </Link>
                <Link to="/Signin">
                    <img src={signinbtn}></img>
                </Link>
            </div>
            <div className="side_menu">
            <Link to="/">
                <img src={side1}></img>
            </Link>
            <Link to="/chart">
                <img src={side2}></img>
            </Link>
            <Link to="/mypage">
                <img src={side3}></img>
            </Link>
            <Link to="/recent">
                <img src={side4}></img>
            </Link>
            <Link to="/want">
                <img src={side5}></img>
            </Link>
            <Link to="/playlist">
                <img src={side6}></img>
            </Link>
            </div>
        </div>

    )
}
export default Sidebar