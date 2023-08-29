import React from "react";

import Todolist3 from "./Todolist3";

function Performance(){
    var [x,setX]=React.useState(1)
    function abc(){
        console.log('abc function')
        setX([238])
    }
    return(
        <div className="mybox">
            <h1>Welcome to Edupoly</h1>
          <h1>{x}</h1>
          <button onClick={abc}>onclick</button>
          <Todolist3></Todolist3>
        </div>
    )
}
export default Performance;