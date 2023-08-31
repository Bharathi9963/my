import React from "react";

function Second(){
   var g=React.useContext(MyContext)
    return(
        <div className="mybox">
          <h1>Second</h1>
          <div>Y::{g}</div>
        </div>
    )
}
export default Second;