import React, { useState, useEffect ,useRef} from 'react';
import Sidebar from "../sidebar/sidebar.js";
import Footer from "../footer/footer.js";
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
                            <img src={playbtn} onClick={()=>{alert('재생화면으로 이동합니다')}}></img>
                            <img src={infobtn} onClick={()=>{alert('상세정보 화면으로 이동합니다')}}></img>
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
                                    Chart(a)
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
                                return(
                                    // <Chart list={a}></Chart>
                                    Chart(a)
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
function Chart(props){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    return(
        <>
        <div className="cardcomponent">
            <Link to="/detail">
            <img src={music_1}></img>
            </Link>
            <div className="artist">{props.SONG_SGER}</div>
            <div className="musicTitle">{props.SONG_TILE}</div>
        </div>
        </>
    )
}
export default Main