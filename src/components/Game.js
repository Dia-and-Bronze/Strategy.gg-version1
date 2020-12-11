import React, { useEffect, useState } from 'react';
import "./../firebase"
import "./Game.css"
import { storage } from './../firebase';
import PieChart from "./GameDetail/PieChart";
import GameDetailWrapper from './GameDetail/GameDetailWrapper';
import axios from 'axios';
import loading from '../img/loading.png';

function ChIDToName(id) {
    switch (id) {
        case 266: return "Aatrox"; break;
        case 103: return "Ahri"; break;
        case 84: return "Akali"; break;
        case 12: return "Alistar"; break;
        case 32: return "Amumu"; break;
        case 34: return "Anivia"; break;
        case 1: return "Annie"; break;
        case 523: return "Aphelios"; break;
        case 22: return "Ashe"; break;
        case 136: return "AurelionSol"; break;
        case 268: return "Azir"; break;
        case 432: return "Bard"; break;
        case 53: return "Blitzcrank"; break;
        case 63: return "Brand"; break;
        case 201: return "Braum"; break;
        case 51: return "Caitlyn"; break;
        case 164: return "Camille"; break;
        case 69: return "Cassiopeia"; break;
        case 31: return "Chogath"; break;
        case 42: return "Corki"; break;
        case 122: return "Darius"; break;
        case 131: return "Diana"; break;
        case 119: return "Draven"; break;
        case 36: return "DrMundo"; break;
        case 245: return "Ekko"; break;
        case 60: return "Elise"; break;
        case 28: return "Evelynn"; break;
        case 81: return "Ezreal"; break;
        case 9: return "Fiddlesticks"; break;
        case 114: return "Fiora"; break;
        case 105: return "Fizz"; break;
        case 3: return "Galio"; break;
        case 41: return "Gangplank"; break;
        case 86: return "Garen"; break;
        case 150: return "Gnar"; break;
        case 79: return "Gragas"; break;
        case 104: return "Graves"; break;
        case 120: return "Hecarim"; break;
        case 74: return "Heimerdinger"; break;
        case 420: return "Illaoi"; break;
        case 39: return "Irelia"; break;
        case 427: return "Ivern"; break;
        case 40: return "Janna"; break;
        case 59: return "JarvanIV"; break;
        case 24: return "Jax"; break;
        case 126: return "Jayce"; break;
        case 202: return "Jhin"; break;
        case 222: return "Jinx"; break;
        case 145: return "Kaisa"; break;
        case 429: return "Kalista"; break;
        case 43: return "Karma"; break;
        case 30: return "Karthus"; break;
        case 38: return "Kassadin"; break;
        case 55: return "Katarina"; break;
        case 10: return "Kayle"; break;
        case 141: return "Kayn"; break;
        case 85: return "Kennen"; break;
        case 121: return "Khazix"; break;
        case 203: return "Kindred"; break;
        case 240: return "Kled"; break;
        case 96: return "KogMaw"; break;
        case 7: return "Leblanc"; break;
        case 64: return "LeeSin"; break;
        case 89: return "Leona"; break;
        case 876: return "Lillia"; break;
        case 127: return "Lissandra"; break;
        case 236: return "Lucian"; break;
        case 117: return "Lulu"; break;
        case 99: return "Lux"; break;
        case 54: return "Malphite"; break;
        case 90: return "Malzahar"; break;
        case 57: return "Maokai"; break;
        case 11: return "MasterYi"; break;
        case 21: return "MissFortune"; break;
        case 62: return "MonkeyKing"; break;
        case 82: return "Mordekaiser"; break;
        case 25: return "Morgana"; break;
        case 267: return "Nami"; break;
        case 75: return "Nasus"; break;
        case 111: return "Nautilus"; break;
        case 518: return "Neeko"; break;
        case 76: return "Nidalee"; break;
        case 56: return "Nocturne"; break;
        case 20: return "Nunu"; break;
        case 2: return "Olaf"; break;
        case 61: return "Orianna"; break;
        case 516: return "Ornn"; break;
        case 80: return "Pantheon"; break;
        case 78: return "Poppy"; break;
        case 555: return "Pyke"; break;
        case 246: return "Qiyana"; break;
        case 133: return "Quinn"; break;
        case 497: return "Rakan"; break;
        case 33: return "Rammus"; break;
        case 421: return "RekSai"; break;
        case 58: return "Renekton"; break;
        case 107: return "Rengar"; break;
        case 92: return "Riven"; break;
        case 68: return "Rumble"; break;
        case 13: return "Ryze"; break;
        case 360: return "Samira"; break;
        case 113: return "Sejuani"; break;
        case 235: return "Senna"; break;
        case 147: return "Seraphine"; break;
        case 875: return "Sett"; break;
        case 35: return "Shaco"; break;
        case 98: return "Shen"; break;
        case 102: return "Shyvana"; break;
        case 27: return "Singed"; break;
        case 14: return "Sion"; break;
        case 15: return "Sivir"; break;
        case 72: return "Skarner"; break;
        case 37: return "Sona"; break;
        case 16: return "Soraka"; break;
        case 50: return "Swain"; break;
        case 517: return "Sylas"; break;
        case 134: return "Syndra"; break;
        case 223: return "TahmKench"; break;
        case 163: return "Taliyah"; break;
        case 91: return "Talon"; break;
        case 44: return "Taric"; break;
        case 17: return "Teemo"; break;
        case 412: return "Thresh"; break;
        case 18: return "Tristana"; break;
        case 48: return "Trundle"; break;
        case 23: return "Tryndamere"; break;
        case 4: return "TwistedFate"; break;
        case 29: return "Twitch"; break;
        case 77: return "Udyr"; break;
        case 6: return "Urgot"; break;
        case 110: return "Varus"; break;
        case 67: return "Vayne"; break;
        case 45: return "Veigar"; break;
        case 161: return "Velkoz"; break;
        case 254: return "Vi"; break;
        case 112: return "Viktor"; break;
        case 8: return "Vladimir"; break;
        case 106: return "Volibear"; break;
        case 19: return "Warwick"; break;
        case 498: return "Xayah"; break;
        case 101: return "Xerath"; break;
        case 5: return "XinZhao"; break;
        case 157: return "Yasuo"; break;
        case 777: return "Yone"; break;
        case 83: return "Yorick"; break;
        case 350: return "Yuumi"; break;
        case 154: return "Zac"; break;
        case 238: return "Zed"; break;
        case 115: return "Ziggs"; break;
        case 26: return "Zilean"; break;
        case 142: return "Zoe"; break;
        case 143: return "Zyra"; break;
    }
}

const Game = (props) => {

    const [DropdownState, setDropdownState] = useState("dropdown-disable");
    const [copyInfo, setCopyInfo] = useState(props);
    
    const [isPageLoading, setIsPageLoading] = useState(0);
    const [isLoading, setLoading] = useState(0);
    const [matchSpec, setMatchSpec] = useState(0);
    const [PlayStyleInfo, setPlayStyleInfo] = useState(null);

    const [LaneImg, setLaneImg] = useState(null);
    const [Spell1Img, setSpell1Img] = useState(null);
    const [Spell2Img, setSpell2Img] = useState(null);
    const [ChampionImg, setChampionImg] = useState(null);

    useEffect(() => {
        if (isPageLoading === 0) { getUrlnfo(); }
    

    }, [isLoading, isPageLoading])
    


    const getUrlnfo = async () => {
        let ChampionURL, Spell1URL, Spell2URL, LaneURL = 0;
        let Lane = copyInfo.info.lane;
        console.log(copyInfo.info);
        // if (copyInfo.info.lane === "BOTTOM" && copyInfo.info.role === "DUO_CARRY") {
        //     Lane = "AD";
        // }
        // else if (copyInfo.info.lane === "BOTTOM" && copyInfo.info.role === "DUO_SUPPORT") {
        //     Lane = "SUPPORTER";
        // }
       

        const championURL = () => {
            ChampionURL = storage.ref().child('Champion/' + String(ChIDToName(copyInfo.info.champion_id)) + '.png').getDownloadURL();
        }
        const spell1URL = () => {
            Spell1URL = storage.ref().child('Spell/' + String(copyInfo.info.spell_id[0]) + '.png').getDownloadURL();
        }
        const spell2URL = () => {
            Spell2URL = storage.ref().child('Spell/' + String(copyInfo.info.spell_id[1]) + '.png').getDownloadURL();
        }
        const laneURL = () => {
            LaneURL = storage.ref().child('Lane/' + String(Lane) + '.png').getDownloadURL();

        }

        try {
            await championURL();
            await ChampionURL.then(resolve => {
                setChampionImg(resolve);
            });
        }
        catch { }

        try {
            await spell1URL();
            await Spell1URL.then(resolve => {
                setSpell1Img(resolve);
            });
        }
        catch { }

        try {
            await spell2URL();
            await Spell2URL.then(resolve => {
                setSpell2Img(resolve);
            });
        }
        catch { }

        try {
            await laneURL();
            await LaneURL.then(resolve => {
                setLaneImg(resolve);
            });
        }
        catch { }

        setIsPageLoading(1);
    }

    
    var time_passed;
    if (copyInfo.info.time_passed < 60) {//1분 이내
        time_passed = copyInfo.info.time_passed + '초';
    }
    else if (copyInfo.info.time_passed < 3600) {//1시간 이내
        time_passed = parseInt(copyInfo.info.time_passed / 60) + '분 ' + parseInt(copyInfo.info.time_passed % 60) + '초';
    }
    else if (copyInfo.info.time_passed < 86400) {//하루 이내
        time_passed = parseInt(copyInfo.info.time_passed / 3600) + '시간 ' + parseInt(copyInfo.info.time_passed % 3600 / 60) + '분';
    }
    else {
        time_passed = parseInt(copyInfo.info.time_passed / 86400) + '일'
    }
    const onClick = (event) => {
        if (DropdownState === "dropdown-disable") {
            setDropdownState("dropdown-able");
            getMatchInfo();
        }
        else if (DropdownState === "dropdown-able") {
            setDropdownState("dropdown-disable");
        }

    }
    const getMatchInfo = async () => {

        try {
            const spec = await axios
                .get(`https://61.99.75.232:5000/analysis/?name=${copyInfo.summonerName}&game_id=${copyInfo.info.game_id}`);
            const PS_spec = await axios
            .get(`https://61.99.75.232:5000/playstyle/?name=${copyInfo.summonerName}&game_id=${copyInfo.info.game_id}`);
      
            setPlayStyleInfo(PS_spec.data); 
     
            setMatchSpec(spec.data);
            
            setLoading(1);
        }
        catch { }
    }
    
    if (isPageLoading === 0) {
        return <img src={loading} className="loading"></img>
    }
    else {
        return (

            <div>
                <div className="GameContainer">
                    <div className="timePassed">{time_passed}</div>
                    <div className="near">
                        <div className="column">
                            <img src={ChampionImg} className="Champion" />
                            <b className="Level">Lv {copyInfo.info.level}</b>
                        </div>
                        <div className="column">
                            <img src={Spell1Img} className="Spell1" />
                            <img src={Spell2Img} className="Spell2" />
                        </div>
                    </div>
                    <div className="column">
                        <b className="KDA">{copyInfo.info.kill + ' / ' + copyInfo.info.death + ' / ' + copyInfo.info.assist}</b>
                        <b className="AVG">{'평점 ' + copyInfo.info.avg}:1</b>
                    </div>
                    <img src={LaneImg} className="Lane" />
                    <div className="column">
                        <h3 className="TeamScore">{copyInfo.info.team_score}</h3>
                        {copyInfo.info.win === 0 ? <h5 className="패배">패배</h5> : <h5 className="승리">승리</h5>}
                    </div>
                    <h3 className="Duration">{parseInt(copyInfo.info.duration / 60) + '분 ' + (copyInfo.info.duration - (parseInt(copyInfo.info.duration / 60)) * 60) + '초'}</h3>
                    <div className="column">
                        <PieChart className="PieChart" feedback={copyInfo.info.feedbacks} />
                        <b className="descPieChart">피드백 개수</b>
                    </div>
                    <button className="Analysis" width="70px" height="70px" onClick={onClick}></button>
                </div>
                <div className={DropdownState}>
                    {isLoading === 0 ? null : <GameDetailWrapper info={matchSpec} ps={PlayStyleInfo} />}

                </div>
            </div>
        );
    }
}
export default Game;