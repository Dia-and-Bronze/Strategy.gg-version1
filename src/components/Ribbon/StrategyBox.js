import React, { useState } from "react"
import "./StrategyBox.css"
import ComboboxStrategy from './ComboBox'
const StrategyBox =({strategy}) =>(
    
    <div className = "StrategyBox">
        {console.log(strategy)}
        <ComboboxStrategy strategy={strategy}/>
        
        {/* <div className = "strategy_content">
            1. 솔로킬 혹은 국지전 승리
        </div>
        <div className = "strategy_content">
            2. 정글링 격차
        </div> */}
    </div>
)
export default StrategyBox;