import React, { useState, useEffect ,useRef} from 'react';
import Sidebar from "../sidebar/sidebar.js";
import Footer from "../footer/footer.js";
import ReactAudioPlayer from 'react-audio-player';
import './mainpage.css'
import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import musicimg from '../../img/musicimg.jpg'
import chartimg from'../../img/chart.svg'
import playbtn from '../../img/playbtn.svg'
import infobtn from '../../img/infobtn.svg'
import rankingup from '../../img/rankingup.svg'
import music_0 from '../../img/music_0.svg'
import music_1 from '../../img/music_1.svg'
import axios from "axios";
import back_btn from '../../img/back_btn.svg'
import next_btn from '../../img/next_btn.svg'
import { Link } from "react-router-dom";


const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return (<div key={user.id}>
                    {user.name}
                </div>)
            })}
        </div>
    );
};


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post( '/songList',
            {
                MEM_ID: 'test'
            },
            {
                headers:{
                    contentType: 'application/json'
                }
            }
        )
            .then(response => {
                setUsers(response.data.sondList);
            });
    }, []);

    return (
        <>
            <h1>Users</h1>
            <UserList users={users}/>
        </>
    );
}

function Main(){
    //let numbers = [1,2,3,4];
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const chartScroll1 = useRef()
    const chartScroll2 = useRef()
    //const audio = new Audio();
   // audio.src = "http://10.80.163.17:8080/findSong?filename=testsong.mp3";
    const [audio, setAudio] = useState(new Audio('http://10.80.163.17:8080/findSong?filename=testsong.mp3'));
    const [audioList] = useState([]);

    useEffect(() => {
        axios.post( '/songList',
            {
                MEM_ID: 'test'
            },
            {
                headers:{
                    contentType: 'application/json'
                }
            }
        )
            .then(response => {
                setUsers(response.data.sondList);
            });
    }, []);


    function initData() {
        axios.post( '/songList',
            {
                MEM_ID: 'test'
            },
            {
                headers:{
                    contentType: 'application/json'
                }
            }
        )
            .then((response) => {
                // console.log(response.data);
                if(response.data.sondList != null){
                    // console.log(response.data.sondList );
                    //setData(response.data.sondList);
                    // numbers = response.data.sondList;

                }
                else {

                }
            })
            .catch((response) => { console.log('Error!') });
    }
    function goLeft1(){
        console.log(chartScroll1.current)
        chartScroll1.current.scrollTo({
            top: 0,
            left: 1300,
            behavior: 'smooth'
          })
    }
    function goRight1(){
        console.log(chartScroll1.current)
        chartScroll1.current.scrollTo({
            top: 0,
            left: -1300,
            behavior: 'smooth'
          })
    }
    function goLeft2(){
        console.log(chartScroll2.current)
        chartScroll2.current.scrollTo({
            top: 0,
            left: 1300,
            behavior: 'smooth'
          })
    }
    function goRight2(){
        console.log(chartScroll2.current)
        chartScroll2.current.scrollTo({
            top: 0,
            left: -1300,
            behavior: 'smooth'
          })
        }
    
    //initData();
    Users();
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
                            <img src={playbtn} onClick={()=>{
                                //alert('재생화면으로 이동합니다')
                                // http://localhost:8080/findSong?filename=001Nxde.mp3

                                audio.play();

                            }}></img>
                            <img src={infobtn} onClick={()=>{
                                //alert('상세정보 화면으로 이동합니다')
                                audio.pause();
                                }}></img>
                        </div>
                        <div className="chart_link">차트 자세히 보러가기></div>

                    </div>
                </div>
                <div className="charttitle">당신이 원하는 음악</div>
                <div className="musiclist_btn">
                    <img src={back_btn} className="backbtn" onClick={goRight1}></img>
                    <div className="musiclist" ref={chartScroll1}>
                    {
                        users.map((a,i)=>{
                                console.log("data num : "+i);
                                console.log("data : "+a);
                                console.log("data SONG_TILE : "+a.SONG_TILE);
                                return(
                                    // <Chart list={a}></Chart>
                                    Chart(a,i,audioList)
                                )
                            })
                        // numbers.map((a,i)=>{
                        //     console.log("data : "+numbers);
                        //     return(
                        //         <Chart list={a}></Chart>
                        //     )
                        // })
                    }
                </div>
                <img src={next_btn} className="nextbtn" onClick={goLeft1}></img>
                </div>
                <div className="charttitle">요즘 트렌드</div>
                <div className="musiclist_btn">
                    <img src={back_btn} className="backbtn" onClick={goRight2}></img>
                    <div className="musiclist" ref={chartScroll2}>
                    {
                        users.map((a,i)=>{
                                console.log("data num : "+i);
                                console.log("data : "+a);
                                console.log("data SONG_TILE : "+a.SONG_TILE);
                                console.log("data SONG_FILE_PATH : "+a.SONG_FILE_PATH);
                                return(
                                    // <Chart list={a}></Chart>
                                    Chart2(a,i)
                                )
                            })
                        // numbers.map((a,i)=>{
                        //     console.log("data : "+numbers);
                        //     return(
                        //         <Chart list={a}></Chart>
                        //     )
                        // })
                    }
                </div>
                <img src={next_btn} className="nextbtn" onClick={goLeft2}></img>
                </div>
                <div style={{height:100}}></div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )

}
let pos = -100;
function Chart(props, i, audioList){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    console.log("i : "+i);
    //props.SONG_IMG_PATH
    //let AudiChart = new Audio('http://10.80.163.17:8080/findSong?filename='+props.SONG_FILE_PATH);
    let url = 'http://10.80.163.17:8080/showImg?filename='+props.SONG_IMG_PATH;
    audioList[i] = new Audio('http://10.80.163.17:8080/findSong?filename='+props.SONG_FILE_PATH);
    return(
        <>
        <div className="cardcomponent">

            <img src={url} onClick={()=>{
               //AudiChart.play();
               //  console.log(audioList.length);
               //  console.log('audio : '+audioList[i].address);
                // for(let j =0 ;j<audioList.length;j++){
                    //audioList[pos].pause();
                // }
                console.log("i : "+i);
                console.log("pos : "+pos);
                if(pos!=-100){
                    audioList[pos].pause();
                }
                audioList[i].play();
                pos = i;
                //pos = i;

            }}></img>
            <div className="artist">{props.SONG_SGER}</div>
            <div className="musicTitle">{props.SONG_TILE}</div>
        </div>
        </>
    )
}
function Chart2(props, i){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    console.log("i : "+i);
    //props.SONG_IMG_PATH
    let AudiChart = new Audio('http://10.80.163.17:8080/findSong?filename='+props.SONG_FILE_PATH);
    let url = 'http://10.80.163.17:8080/showImg?filename='+props.SONG_IMG_PATH;
    return(
        <>
            <div className="cardcomponent">
                <Link to="/detail">
                    <img src={url} onClick={()=>{
                        AudiChart.play();

                    }}></img>
                </Link>
                <div className="artist">{props.SONG_SGER}</div>
                <div className="musicTitle">{props.SONG_TILE}</div>
            </div>
        </>
    )
}
export default Main