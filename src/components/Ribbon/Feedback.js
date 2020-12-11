import React, { useState } from 'react'
import './Feedback.css'
import { Combobox, DropdownList } from 'react-widgets'
import "react-widgets/dist/css/react-widgets.css";
import BoxContainers from './BoxContainers'

var temp_StrategyArr = [];
var myStrategy = [];
const Feedback = (props) =>{
    console.log(props);
    let yourStrategyMinimumTier=0;
    if(props.summonerTier === "BRONZE"||props.summonerTier === "SILVER"){
        yourStrategyMinimumTier= "GOLD";
    }
    else if(props.summonerTier === "GRANDMASTER"){
        yourStrategyMinimumTier="CHALLENGER";
    }
    else{
        yourStrategyMinimumTier=props.summonerTier;
    }
    const [tier, setTier] = useState(yourStrategyMinimumTier);
    var feedbackArr = Object.keys(props.feedback);
    let tierList = [];
    
    if(props.summonerTier === "BRONZE")tierList=["GOLD","PLATINUM","DIAMOND","MASTER","CHALLENGER"];
    if(props.summonerTier === "SILVER")tierList=["GOLD","PLATINUM","DIAMOND","MASTER","CHALLENGER"];
    if(props.summonerTier === "GOLD")tierList=["GOLD","PLATINUM","DIAMOND","MASTER","CHALLENGER"];
    if(props.summonerTier === "PLATINUM")tierList=["PLATINUM","DIAMOND","MASTER","CHALLENGER"];
    if(props.summonerTier === "DIAMOND")tierList=["DIAMOND","MASTER","CHALLENGER"];
    if(props.summonerTier === "MASTER")tierList=["MASTER","CHALLENGER"];
    if(props.summonerTier === "GRANDMASTER")tierList=["CHALLENGER"];
    if(props.summonerTier === "CHALLENGER")tierList=["CHALLENGER"];
    temp_StrategyArr = [];
    function getStrategy(value) {
        if(props.summonerTier==="BRONZE"){

            if(value === "GOLD"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[0].strategy}))} 
            if(value === "PLATINUM"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[1].strategy}))}
            if(value === "DIAMOND"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[2].strategy}))}
            if(value === "MASTER"){temp_StrategyArr.push(feedbackArr.map(number => {return  props.feedback[number].strategies[3].strategy}))}
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => {return  props.feedback[number].strategies[4].strategy}))}
          }
          if(props.summonerTier==="SILVER"){
            if(value === "GOLD"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[0].strategy}))} 
            if(value === "PLATINUM"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[1].strategy}))}
            if(value === "DIAMOND"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[2].strategy}))}
            if(value === "MASTER"){temp_StrategyArr.push(feedbackArr.map(number => {return  props.feedback[number].strategies[3].strategy}))}
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => {return  props.feedback[number].strategies[4].strategy}))}
          }
        if(props.summonerTier==="GOLD"){
            if(value === "GOLD"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[0].strategy}))} 
            if(value === "PLATINUM"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[1].strategy}))}
            if(value === "DIAMOND"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[2].strategy}))}
            if(value === "MASTER"){temp_StrategyArr.push(feedbackArr.map(number => {return  props.feedback[number].strategies[3].strategy}))}
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => {return  props.feedback[number].strategies[4].strategy}))}
          }
            if(props.summonerTier==="PLATINUM"){
            if(value === "PLATINUM"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[0].strategy}))}
            if(value === "DIAMOND"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[1].strategy}))}
            if(value === "MASTER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[2].strategy}))}
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[3].strategy}))}
          }
          if(props.summonerTier==="DIAMOND"){
            if(value === "DIAMOND"){temp_StrategyArr.push(feedbackArr.map(number => {return props.feedback[number].strategies[0].strategy}))}
            if(value === "MASTER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[1].strategy}))}
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[2].strategy}))}
          }
          if(props.summonerTier==="MASTER"){
            if(value === "MASTER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[0].strategy}))}
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[1].strategy}))}
          }
          if(props.summonerTier==="GRANDMASTER"){
            
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[0].strategy}))}
          }

          if(props.summonerTier==="CHALLENGER"){
            if(value === "CHALLENGER"){temp_StrategyArr.push(feedbackArr.map(number => { return props.feedback[number].strategies[0].strategy}))}
          }
  
       myStrategy = temp_StrategyArr[0];
       console.log(myStrategy);
       temp_StrategyArr=[];
    }
    getStrategy(tier);
    return(
        <div className = "feedback_content_container">
            <div className = "원인">원인</div>

            <div className = "others">
                <div className = "시점기대승률승률변화전략">
                    <div >시점</div>
                    <div className = "기대승률">기대승률</div>
                    <div className = "최대승률변화량">최대승률변화량</div>
                </div>
                {feedbackArr.map(x=>(
                    <BoxContainers time = {x} feedback={props.feedback[x]}/>
                ))}
            </div>
            <div className = "combo">
                <div className = "comboTitle">
                    <div className= "전략" >전략</div>  
                    <DropdownList
                    data={tierList}
                    value={tier}
                    onChange={value =>(setTier(value),getStrategy(value))}
                    className="size"/>
                </div>
                {feedbackArr.map((value, index)=>(
                    <div className = "strategyContainer">
                       
                        
                        {props.feedback[value].feedback.map((x,y)=>(y>=1 ? <br></br> : null ))}
                        {myStrategy.map((x,y)=> (
                            y === index ? x.map(text=><div className = "strategy_content">{text}</div>) : null ))
                        }
                        {props.feedback[value].feedback.map((x,y)=>(y>=1 ? <br></br> : null ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Feedback;