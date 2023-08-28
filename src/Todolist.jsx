import React from "react";
function Todolist(props){
    console.log(props)
    
    var players=props.players
    var title=props.title


    return(
        <div className="mybox">
              <h1>{title}</h1>
              <ul>
                {
                    players.map((todo)=>{
                      return <li>{todo}
                      
                      </li>
                    })
                }
              </ul>
        </div>
    )
}
export default Todolist;