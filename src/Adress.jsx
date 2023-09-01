import React from "react";
import Todolist from "./Todolist";
import { Ref } from "react";
var Address= React.forwardRef((props,refs)=>{
    
    return(
        <div className="mybox">
          <input type='text' ref={refs}></input>
        </div>
    )
})
export default Address;