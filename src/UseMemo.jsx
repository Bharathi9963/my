import React from "react";
import Counter from "./Counter";

function Mem(){
  var [x,setx]=React.useState(1)
  function acb(){
    setx(x+1)
  }
  var [ar,setar]=React.useMemo(()=>{return [12,23],[]})
    return(
        <div>
            <h1>Welcome Edupoly</h1>
            <div>{x}</div>
            <button onClick={()=>{acb()}}>click</button>
          <Counter x={ar}></Counter>
        </div>
    )
}
export default Mem;