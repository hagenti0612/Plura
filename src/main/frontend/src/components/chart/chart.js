import React from "react";
import Sidebar from "../sidebar/sidebar.js";
import Footer from '../footer/footer.js';
import './chart.css'
import playall from '../../img/play_all.svg'
import music_1 from '../../img/music_1.svg'
import playbtn from '../../img/play_btn_black.svg'
import playlist from '../../img/play_list.svg'
import mylist from '../../img/my_list.svg'
import details from '../../img/details.svg'

function Chart(){
    const numbers = [1,2,3,4,5,6,7,8,9];
    return(
        <>
        <div className="back">
            <Sidebar></Sidebar>
            <div className="chart">
                <div className="chartTitle">
                    <div className="TopChart"><span className="Plura">PLURA</span> TOP 100</div>
                    <div className="total">24시간 집계</div>
                    <div className="playall">
                        <img src={playall} className="playallbtn" onClick={()=>{alert('재생화면으로 이동합니다')}}></img>
                        <div>전체 듣기</div>
                    </div>
                </div>
                <div className="chartdetail">
                    <div className="left">
                        <input type={'checkbox'} className="checkbox"></input>
                        <div>순위</div>
                        <div>곡</div>
                    </div>
                    <div className="right">
                        <div>듣기</div>
                        <div>재생목록</div>
                        <div>내 리스트</div>
                        <div>더보기</div>
                    </div>
                </div>
                <div className="charttop">
                    {
                        numbers.map((a,i)=>{
                            return(
                                <TopChart list={a}></TopChart>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}
function TopChart(props){
    return(
        <>
        <div className="musicdetail">
            <div className="musicleft">
                <input type={'checkbox'}></input>
                <div>1</div>
                <div className="music">
                    <img src={music_1} className="musicimg"></img>
                    <div className="musicinfo">
                        <div className="musictitle">라일락</div>
                        <div className="musicartist">IU</div>
                    </div>
                </div>
            </div>
            <div className="musicright">
                <img src={playbtn} onClick={()=>{alert('재생 화면으로 이동합니다')}}></img>
                <img src={playlist} onClick={()=>{alert('재생목록 화면으로 이동합니다')}}></img>
                <img src={mylist} onClick={()=>{alert('근데 내 리스트랑 재생목록이랑 뭔 차이임?')}}></img>
                <img src={details} ></img>
            </div>
        </div>
        </>
    )
}
export default Chart