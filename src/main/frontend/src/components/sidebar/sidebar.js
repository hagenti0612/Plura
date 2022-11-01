import React from "react";
import './sidebar.css'
import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import musicimg from '../../img/musicimg.jpg'

function Sidebar(){
    return(
        <div className="menu">
            <img className="logo" src={logo}></img>
            <div className="searchplace">
                <img className="search" src={search} onClick={()=>{alert('검색결과가 존재하지 않습니다.')}}></img>
                <input placeholder="PLURA검색" type={'text'} className="searchbox"></input>
            </div>
        </div>

    )
}
export default Sidebar