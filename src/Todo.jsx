import React from "react";
import Todolist from "./Todolist";
function Todo(props){
    return(
        <div>
           <li className="mybox">
                            {props.todo}
                            <button onClick={props.d}>Delete</button>
                            <button>Done</button>
                            <button>Undo</button>
                            </li>
        </div>
    )
}
export default Todo;