import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import './MainSummonerInput.css'
import loading from '../img/loading.png';
import fs from 'fs';

const MainSummonerInput = () =>{
 
  
  const history = useHistory();
  let [users, setUsers] =useState(null);
  let [userSpec, setUserSpec]= useState(null);
  let [searchBTN, setSearchBtn] = useState("searchButton");
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const onChange = (event) => {
    setUsers(event.target.value);
  }
  const onClick=()=>{
    //alert("소환사 데이터를 로딩합니다.\n확인 버튼을 누른 후 조금만 기다려주세요.\n다소 시간이 걸릴 수도 있습니다.");
    setSearchBtn("SearchButtonloading");
    getSummonerInfo();
  }
  const getSummonerInfo = async() => {
   
   
  
   

    try{
      const axios = require('axios');
        const https = require('https');
        console.log("1");
        const spec= await axios.get(`https://61.99.75.232:5000/specpage/?name=${users}`);
        // const httpsAgent = new https.Agent({
        //   rejectUnauthorized: false,
        //   // ca: fs.readFileSync("./server.crt"),        //crt
        //   // cert: fs.readFileSync('../thirdparty.crt'),//crt
        //   // key: fs.readFileSync('../server.key'), //pem
        // })
        console.log(spec);
        // const spec = await axios.get(`https://61.99.75.232:5000/specpage/?name=${users}`, { httpsAgent })
      

        setSearchBtn("searchButton");
        setUserSpec(spec);
        history.push({
          pathname: `/summoner/${users}`,
          state: { spec }
        })
        
    }
    catch{
      history.push("/ExceptPage");
    }
}
  return(
    
    <form onSubmit={handleSubmit} >
       <input 
        id = "myInput"
         type = "text" 
         name = "users"
         placeholder = "소환사 이름을 입력하세요."
         className="search"
         onChange={onChange}
        />
       
        <button className = {searchBTN}  onClick={onClick}/>
    </form>
   );

}

export default MainSummonerInput;