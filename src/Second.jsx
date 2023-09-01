import React, { useContext } from "react";
import Mycontext from "./Context";

function Second(props){
   var x= useContext(Mycontext);
    return(
        <div className="mybox">
           <h1>Second</h1>
           <div>y::{x}</div>
        </div>
    )
}
export default Second;