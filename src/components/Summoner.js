import React from 'react';
import './Summoner.css'
import ProfileIocn from '../img/TempProfileicon.png'
import Tier from '../img/TempTier.png'
import  "./../firebase"
import { storage } from './../firebase';

const Summoner = (props) => {
    console.log(storage.ref());
    const profileimg = storage.ref().child('0.png').getDownloadURL();
    console.log(profileimg);
    return(
        <div className="ProfileContainer">
            <img src =  {profileimg} alt="Profileicon" className = "ProfileIcon"/> 
            <b className = "SummonerName">Hide On Bush</b>
            <button className = "UpdateButton">전적갱신</button>
                
            <img src = {Tier} alt="TierIcon" className = "TierIcon"/>
                
            <b className = "TierName">Master</b>
            <br></br>
            <b className = "LP">284LP</b>

        </div>
    );

}

export default Summoner;