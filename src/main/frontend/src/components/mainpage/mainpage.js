import React from "react";
import Sidebar from "../sidebar/sidebar.js";
import './mainpage.css'
import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import musicimg from '../../img/musicimg.jpg'
function Main(){
    return(
        <>
        <div className="back">
            <Sidebar></Sidebar>
            <div className="chart">chart</div>
        </div>
        </>
    )

}

export default Main

function Chart(){

}