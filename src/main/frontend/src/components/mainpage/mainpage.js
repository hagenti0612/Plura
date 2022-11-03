import React from "react";
import Sidebar from "../sidebar/sidebar.js";
import './mainpage.css'
import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import musicimg from '../../img/musicimg.jpg'
import chartimg from'../../img/chart.svg'
import playbtn from '../../img/playbtn.svg'
import infobtn from '../../img/infobtn.svg'
import rankingup from '../../img/rankingup.svg'
function Main(){
    return(
        <>
        <div className="back">
            <Sidebar></Sidebar>
            <div className="chart">
                <div className="charttitle">오늘의 차트</div>
                <div className="chartscreen">
                    <img src={chartimg}></img>
                    <div className="charttext">
                        <div className="chart_rankingbox">
                            <div className="chart_ranking">차트 1위</div>
                            <img src={rankingup}></img>
                        </div>
                        <div className='chart_musictitle'>After Like</div>
                        <div className='chart_musicartist'>IVE(아이브)</div>
                        <div className="chart_btn">
                            <img src={playbtn} onClick={()=>{alert('재생화면으로 이동합니다')}}></img>
                            <img src={infobtn} onClick={()=>{alert('상세정보 화면으로 이동합니다')}}></img>
                        </div>
                        <div className="chart_link">차트 자세히 보러가기></div>

                    </div>
                </div>
                <div className="charttitle">당신이 원하는 음악</div>
            </div>
        </div>
        </>
    )

}

export default Main

function Chart(){

}