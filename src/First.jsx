import React from "react";
import Second from "./Second";
function First(props){
   
    return(
        <div className="mybox">
            <h1>First</h1>
            <div>y::{props.y}</div>
          <Second></Second>
        </div>
    )
}
export default First;