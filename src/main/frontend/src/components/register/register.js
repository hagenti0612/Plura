import React from "react";
import { useState, useRef } from 'react'
import Sidebar from "../adminSidebar/adminSidebar.js";
import './register.css'
import imgUpload from'../../components/adminimg/imgUpload.svg'
import musicUpload from'../../components/adminimg/musicUpload.svg'
import exitbtn from'../../components/adminimg/exitbtn.svg'
import registerbtn from'../../components/adminimg/registerbtn.svg'
function Register(){
    const imgonChange = (e) => {
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('img', img);
        console.log(formData)
        for (const keyValue of formData) console.log(keyValue);
    }
    const musiconChange = (e) => {
        const music = e.target.files[0];
        const formData = new FormData();
        formData.append('music', music);
        console.log(formData)
        for (const keyValue of formData) console.log(keyValue);
    }
    return(
        <>
        <div className="back">
            <Sidebar></Sidebar>
            <div className="chart">
                <div className="registertitle"><div className="PLURA">PLURA</div>노래 등록</div>
                <input type='file' accept='image/*' name='music_img' onChange={imgonChange} className="imgUpload" id="uploadimg"></input>
                <input type='file' accept='mp3/*' name='music' onChange={musiconChange} className="imgUpload" id="uploadmusic"></input>
                <div className="upload">
                    <label for="uploadimg">
                        <img src={imgUpload} className="musicImg"></img>
                    </label>
                     <label for="uploadmusic">
                        <img src={musicUpload} className="Music"></img>
                    </label>
                </div>
                <div className="inputbox">
                    <div className="inputbox_left">
                        <div className="input">
                            <div className="inputtitle">노래 제목</div>
                            <input type="text" className="titlemusic"></input>
                        </div>
                        <div className="input">
                            <div className="inputtitle">작사가</div>
                            <input type="text" className="musicwriter"></input>
                        </div>
                        <div className="input">
                            <div className="inputtitle">작곡가</div>
                            <input type="text" className="musicArtist"></input>
                        </div>
                        <div className="input">
                            <div className="inputtitle">발매 일자</div>
                            <input type="text" className="musicrelease"></input>
                        </div>
                    </div>
                    <div className="inputbox_right">
                    <div className="input">
                            <div className="inputtitle">아티스트 이름</div>
                            <input type="text" className="artistname"></input>
                        </div>
                        <div className="input">
                            <div className="inputtitle">가사</div>
                            <textarea className="lyrics"></textarea>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <img src={exitbtn} className="exitbtn"></img>
                    <img src={registerbtn} className="registerbtn"></img>
                </div>
            </div>
        </div>
    </>
    )
    
}
export default Register