import React from "react";
import Sidebar from "../sidebar/sidebar.js";
import Footer from '../footer/footer.js';
import './detail.css'
import IU from '../../img/IU.svg';
import playbutton from '../../img/playbtn_detail.svg'
import playlistbtn from '../../img/detail_playlistbtn.svg'
import heart from '../../img/heartbtn.svg'
import profile from '../../img/profile.svg'

function Detail(){
    const numbers = [1,2,3,4,5,6,7,8,9];
    return(
        <>
            <div className="back">
            <Sidebar/>
            <div className="component">
                <div className="music_detailtitle">
                    <img src={IU}></img>
                    <div className="music_detail_right">
                    <div className="music_detail_title">LILAC</div>
                    <div className="music_detail_singer">아이유 (IU)</div>
                    <div className="detail_writer">
                        <div>작사 | </div>
                        <div style={{marginLeft:10}}>아이유 (IU)</div>
                    </div>
                    <div className="detail_composer">
                        <div>작곡 | </div>
                        <div style={{marginLeft:10}}>임수호, Dr.Jo, 웅킴, N!ko</div>
                    </div>
                    <div className="detail_released">
                        <div>발매 | </div>
                        <div style={{marginLeft:10}}>2021년 3월 25일</div>
                    </div>
                    <div className="detail_btns">
                        <img src={playbutton}></img>
                        <img src={playlistbtn}></img>
                        <div className="play_count">
                        <img src={heart}></img>
                        <div>+999</div>
                        </div>
                        <div className="play_count">
                            <div>1K회</div>
                            <div>PLAY</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="titles">가사</div>
                <div className="lyrics_textbox"></div>
                <div className="titles">댓글</div>
                <div className="comment_box">
                    <img src={profile} style={{width:30 ,marginLeft:10}}></img>
                    <div className="comment_text">로그인이 필요합니다</div>
                </div>
            </div>
            <Footer></Footer>
            </div>
            
        </>
    )
}
export default Detail