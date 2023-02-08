import React from "react";
import cattree from './photos/cattree.jpeg';
import "./index.css"

function Body2(){
    return(<div className="salesbox2"> 
        <box className="picturebox">
            <img src={cattree} alt=""/>
        </box>
        <box className="center">
        <div>Cat Tree 150$</div> 
    
        <button className="buttonright"> buy</button>
        </box>
        </div>
    )
    
}
// need to work on css properties
export default Body2;