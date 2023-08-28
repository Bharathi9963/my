import React from "react";
import Todo from "./Todo";

function Todolist3(props){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    function addtodo(){
        var x = document.getElementById('in').value
        setTodos([...todos,x])
       
    }
    function delTodo(i){
        var temp = [...todos]
        temp.splice(i,1)
        setTodos([...temp])
        //alert(i)
    }
    //template
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" id="in"/>
            <button onClick={addtodo}>Add List</button>
            
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <Todo todo={todo} d={delTodo} i={i}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist3;