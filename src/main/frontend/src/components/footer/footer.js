import React from "react";
import '../footer/footer.css'
import music_empty from '../../img/music_empty.svg'
import next from '../../img/next.svg'
import back from '../../img/back.svg'
import shuffle from '../../img/shuffle.svg'
import loop from '../../img/loop.svg'
import play from '../../img/play.svg'

function Footer(){
    return(
        <div className="footer">
            <img src={music_empty}></img>
            <div className="bar_musictitle">재생목록이 비어있습니다</div>
            <div className="playbar">
                <div className="playbar_btn">
                    <img src={loop}></img>
                    <img src={back}></img>
                    <img src={play}></img>
                    <img src={next}></img>
                    <img src={shuffle}></img>
                </div>
                <div className="playbar_line">
                    <div className="music_progress">0:00</div>
                    <div className="music_line"></div>
                    <div className="music_remain">0:00</div>
                </div>
            </div>
        </div>

    )
}
export default Footer