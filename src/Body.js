import React from "react";
import cattree from './photos/cattree.jpeg';
import "./App.css"
function Body(){
    return(<div className="salesbox"> 
        <div className="picturebox">
            <img src={cattree} alt=""/>
        </div>
        <div>Cat Tree</div>
        <div>150$</div>
        <button> buy</button>
        </div>
    )
}
// need to work on css properties, not sure if the import link is properly set up

export default Body;