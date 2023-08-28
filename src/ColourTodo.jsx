import React from "react";
import Todo from "./Todo";
import Todo2 from "./Todo2";

function ColourTodo(props){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    function addtodo(){
        var x = document.getElementById('in').value
        setTodos([...todos,x])  
    }
   function abc(){
    
   }
   
    //template
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" id="in"/>
            <button onClick={addtodo}>Add List</button>
            
            <ul>
                {
                    todos.map((todo)=>{
                        return <Todo2 todo={todo} d={abc}></Todo2>
                    })
                }
            </ul>
        </div>
    )
}
export default ColourTodo;