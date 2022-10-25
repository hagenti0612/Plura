import React from "react";
import './signin.css'
import heart from '../../img/el_heart.svg'
import bar from '../../img/bar.svg'
import left from '../../img/left.svg'
import right from '../../img/right.svg'
import signin from '../../img/signin.svg'

function Signin(){
    return(
        <>
        <div className="back_img">
            <div className='items'>
                <div className="glassbox1">
                    <div className='signintext'>
                        <div className='title'>SIGN UP</div>
                        <div className='text'>닉네임</div>
                        <input type={'text'} className='nicknamebox'></input>
                        <div className='text'>나이</div>
                        <input type={'number'} min="1" className='agebox'></input>
                        <div className='text'>전화번호</div>
                        <input type={'tel'} maxLength='11' className='telbox'></input>
                    </div>
                    <div className="signintextR">
                        <div className="text">이메일</div>
                        <input type={'email'} className='emailbox'></input>
                        <div className="text">비밀번호</div>
                        <input type={'password'} className='passwordbox'></input>
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

                        <img className='btn' src={signin} onClick={()=>{alert('이메일로 인증 링크를 발송했습니다.')}}></img>
                        <img src={right}></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin