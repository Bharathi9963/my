import React from "react";
import Todo from "./Todo";

function ColourTodo(props){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    function addtodo(){
        var x = document.getElementById('in').value
        setTodos([...todos,x])  
    }
    function donetodo(){
        setTodos(className='')
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
                        return <Todo todo={todo} d={donetodo}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default ColourTodo;