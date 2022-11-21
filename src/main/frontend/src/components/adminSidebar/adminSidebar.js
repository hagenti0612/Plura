import React from "react";
import './adminSidebar.css'
import logo from '../../components/adminimg/logo.svg'
import adminprofile from '../../components/adminimg/adminimg.svg'
import { Link } from "react-router-dom";

import side1 from'../../components/adminimg/adminSide(1).svg'
import side2 from'../../components/adminimg/adminSide(2).svg'
import side3 from'../../components/adminimg/adminSide(3).svg'
import side4 from'../../components/adminimg/adminSide(4).svg'

function adminSidebar(){
    return(
        <div className="adminMenu">
            <img className="logo" src={logo}></img>
            <div className="side_profile">
                <img src={adminprofile}></img>
                <div className="adminname">
                    <div>구자현</div>
                    <div className="adminguide">관리자님</div>
                </div>
            </div>
            <div className="adminSide_menu">
                <Link to="/">
            <img src={side1}></img></Link>
            <Link to="/">
            <img src={side2}></img></Link>
            <Link to="/">
            <img src={side3}></img></Link>
            <Link to="/">
            <img src={side4}></img></Link>
            </div>
        </div>

    )
}
export default adminSidebar