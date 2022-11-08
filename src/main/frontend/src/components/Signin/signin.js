import React from "react";
import axios from 'axios';
import './signin.css'
import heart from '../../img/el_heart.svg'
import bar from '../../img/bar.svg'
import left from '../../img/left.svg'
import right from '../../img/right.svg'
import signin from '../../img/signin.svg'

function Signin(){
    let data = {
       userId : '' ,
       userPw : '' ,
       nickNm : '',
       phoneNum : '',
       userAge : '',

    }

    function handleUserId(e) {
        data.userId = e.target.value;
    }

    function handleUserNickNm(e) {
        data.nickNm = e.target.value;
    }
    function handleUserAge(e) {
        data.userAge = e.target.value;
    }
    function handleUserPhoneNum(e) {
        data.phoneNum = e.target.value;
    }
    function handleUserPw(e) {
        data.userPw = e.target.value;
    }




    return(
        <>
        <div className="back_img">
            <div className='items'>
                <div className="glassbox1">
                    <div className='signintext'>
                        <div className='title'>SIGN UP</div>
                        <div className='text'>닉네임</div>
                        <input type={'text'} className='nicknamebox' onChange={handleUserNickNm}></input>
                        <div className='text'>나이</div>
                        <input type={'number'} min="1" className='agebox' onChange={handleUserAge}></input>
                        <div className='text'>전화번호</div>
                        <input type={'tel'} maxLength='11' className='telbox' onChange={handleUserPhoneNum}></input>
                    </div>
                    <div className="signintextR">
                        <div className="text">이메일</div>
                        <input type={'email'} className='emailbox' onChange={handleUserId}></input>
                        <div className="text">비밀번호</div>
                        <input type={'password'} className='passwordbox' onChange={handleUserPw}></input>
                        <div className="text">비밀번호 확인</div>
                        <input type={'password'} className='check_passwordbox'></input>
                    </div>
                </div>
            </div>
            <div className='musicbox'>
                <div className='column'>
                    <div className='musicbox'>
                        <div className='column'>
                        <div className='version'>v.00.1</div>
                        <div className='welcome' alt="">WELCOME TO PLURA</div>
                        </div>
                        <img className='img' src={heart}></img>
                    </div>
                    <div className='musicbar'>
                        <img src={bar}></img>
                    </div>
                    <div className='row'>
                        <img src={left}></img>

                        <img className='btn' src={signin} onClick={
                            ()=>{
                                axios.post( '/memberCreate',
                                    {
                                        MEM_ID: data.userId
                                        , MEM_PW : data.userPw
                                        , MEM_NIKNE : data.nickNm
                                        , MEM_AGE : data.userAge
                                        , MEM_CALL_NUM : data.phoneNum
                                    },
                                    {
                                        headers:{
                                            // 'Content-type': 'application/json',
                                            // 'Accept': 'application/json',
                                            contentType: 'application/json'
                                        }
                                    }
                                )
                                    .then((response) => { console.log(response.data); })
                                    .catch((response) => { console.log('Error!') });
                                alert('data : '+data.userId +', '+data.userPw);
                            }
                        }></img>
                        <img src={right}></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin