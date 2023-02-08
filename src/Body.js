import React from "react";
import cattree from './photos/cattree.jpeg';
import "./index.css"

function Body(){
    return(
    <div className="bodyBox">

<div className="salesbox"> 
        <box className="picturebox">
            <img src={cattree} alt=""/>
        </box>
        <box className="center">
        <div>Cat Tree 150$</div> 
    
        <button className="buttonright"> buy</button>
        </box>
        </div>

        <div className="salesbox"> 
        <box className="picturebox">
            <img src={cattree} alt=""/>
        </box>
        <box className="center">
        <div>Cat Tree 150$</div> 
    
        <button className="buttonright"> buy</button>
        </box>
        </div>

    <div className="salesbox"> 
        <box className="picturebox">
            <img src={cattree} alt=""/>
        </box>
        <box className="center">
        <div>Cat Tree 150$</div> 
    
        <button className="buttonright"> buy</button>
        </box>
        </div>
        </div>
    )
    
}
// need to work on css properties
export default Body;