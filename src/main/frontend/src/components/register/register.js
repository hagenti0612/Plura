import React, {useState, useEffect, useRef} from 'react';
import Sidebar from "../adminSidebar/adminSidebar.js";
import './register.css'
import imgUpload from'../../components/adminimg/imgUpload.svg'
import musicUpload from'../../components/adminimg/musicUpload.svg'
import exitbtn from'../../components/adminimg/exitbtn.svg'
import registerbtn from'../../components/adminimg/registerbtn.svg'
import axios from "axios";
function Register(){
    const [imgBase64, setImgBase64] = useState([]);
    const [imgFile, setImgFile] = useState(null);

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
    const handleChangeFile = (event: any) => {
        console.log(event.target.files);
        setImgFile(event.target.files);
        setImgBase64([]);
        for(let i=0 ; i<event.target.files.length ; i++) {
            if(event.target.files[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onloadend = () => {
                    const base64 = reader.result; // 비트맵 데이터 리턴, 이 데이터를 통해 파일 미리보기가 가능함
                    console.log(base64)
                    if(base64) {
                        let base64Sub = base64.toString()
                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                    }
                }
            }
        }
    }

    return(
        <>
        <div className="back">
            <Sidebar></Sidebar>
            <div className="register_chart">
                <div className="registertitle"><div className="PLURA">PLURA</div>노래 등록</div>
                {/*<input type='file' accept='image/*' name='music_img' onChange={handleChangeFile} multiple  className="imgUpload" id="uploadimg"></input>*/}
                <input type="file" accept='image/*' id="file" onChange={handleChangeFile} multiple/>
                {imgBase64.map((item) => {
                    return (
                        <img
                            key={item}
                            src={item}
                            alt={"First slide"}
                            style={{width:"200px", height:"150px"}}
                        />
                    )
                })}
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
                    <img src={registerbtn} className="registerbtn"
                         onClick={()=>{
                             console.log("registerbtn start : "+imgFile.length);
                             const fd = new FormData();
                             for(let i=0 ; i<imgFile.length ; i++) {
                                 fd.append("file", imgFile[i]);
                             }
                             // 안돌아감.
                             // Object.values(imgFile).forEach((file) => {
                             //     fd.append("file", file as Blob)
                             // });
                             let sendData = {Song:"1212", Title:"3434"}
                             fd.append(
                                 "comment",
                                 "test11"
                             );
                             fd.append("data", new Blob([JSON.stringify(sendData)], {type: "application/json"}))

                             axios.post( '/songRegisterImage',
                                     fd
                                 ,
                                 {
                                     headers:{
                                         contentType: 'multipart/form-data'
                                     }
                                 }
                             )
                                 .then((response) => {
                                     console.log(response.data);

                                 })
                                 .catch((response) => { console.log('Error!') });
                             //alert('비밀번호가 정확하지 않습니다 다시 시도해주세요')
                         }}
                    ></img>
                </div>
            </div>
        </div>
    </>
    )
    
}
export default Register