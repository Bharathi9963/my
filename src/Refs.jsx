import React from "react";

function Refer(props){
    var [st,setst]=React.useState('')
    
    return(
        <div className="mybox">
           <h1>Welcome</h1>
           <input type='text' onChange={(ev)=>{setst(ev.target.value)}}></input>
           <button >Click me</button>
        </div>
    )
}
export default Refer;