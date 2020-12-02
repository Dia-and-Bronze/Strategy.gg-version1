import React, {useState} from 'react'
import "./RibbonMenu.css"
import StrategyInfoBox from "./StrategyInfoBox"
import ComboboxStrategy from './ComboBox'
import MyDropDown from './MyDropDown';
import 'react-dropdown/style.css';


const RibbonMenu = ({data}) =>{
    console.log("리본메뉴 위치");
    const [FeedbackBTN, setFeedbackBTN] = useState("Selected");
    const [PlayStyleBTN, setPlayStyleBTN] = useState("UnSelected");
    let i =0;
     let arr = [];
     const find = (i) => {
        for (i; i < 120; i++) {
          if (data.feedback_points[i]) {
            arr.push(i);
          }
          
        }
        console.log("find에 있다");
      return (arr.map(feed => (<StrategyInfoBox key={i} feedBack={data.feedback_points[feed]} timestamp={feed}/>)))
    //여기 겹치나?
      };

    const F_onClick = (event) => {
        if(FeedbackBTN === "UnSelected"){
            setFeedbackBTN("Selected");
            setPlayStyleBTN("UnSelected");
        }
    }
    const PS_onClick = (event) => {
        if(PlayStyleBTN === "UnSelected"){
            setFeedbackBTN("UnSelected");
            setPlayStyleBTN("Selected");
        }
    }
    // const data = [
    //     {"feedback_points": 
    //     {"4": {"delta": -27.7, "win_rate": 62.2, "feedback": ["국지전 패배", "cs 격차"]}, 
    //     "9": {"delta": 20.3, "win_rate": 45.1, "feedback": ["국지전 승리"]}, 
    //     "10": {"delta": 9.6, "win_rate": 65.4, "feedback": ["레벨 격차", "cs 격차"]}, 
    //     "17": {"delta": 22.7, "win_rate": 55.1, "feedback": ["국지전 승리", "타워 파괴", "용 처치", "레벨 격차", "cs 격차"]}, 
    //     "21": {"delta": 26.9, "win_rate": 58.6, "feedback": ["스플릿 공격로 압도", "레벨 격차"]}}}];
    return(
      <div>
      <button onClick = {F_onClick} className = {FeedbackBTN}>Feedback</button>
      <button onClick = {PS_onClick} className = {PlayStyleBTN}>PlayStyle</button>
      <div className = "ribon-container">
        <div>
            <text className = "desc"  >시점   &nbsp;&nbsp;&nbsp;&nbsp;</text>
            <text className = "desc" > &nbsp;&nbsp;최대승률변화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text> 
            <text className = "desc" > 기대승률&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
            <text className = "desc" > 원인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
            <text className = "desc" > 전략추천</text>
            {find(i)}
               
        </div>
        <div>
          <ComboboxStrategy/>
        </div>
      </div>
  </div>
  
    );
}
export default RibbonMenu;