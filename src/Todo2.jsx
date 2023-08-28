import React from "react";
import Todolist from "./Todolist";
function Todo2(props){
    return(
        <div>
            
           <li className="coltodo">
                            {props.todo}

                            <button onClick={props.d}>Done</button>
                            <button>Undo</button>
                            </li>
            
        </div>
    )
}
export default Todo2;