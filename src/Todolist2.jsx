import React from "react";

function Todolist2(props){
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
            {console.log('hello')}
            <h1>Todolist</h1>
            <input type="text" id="in"/>
            <button onClick={addtodo}>Add List</button>
            
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li className="mybox">
                            {todo}
                            <button onClick={()=>{delTodo(i)}} i={i}>Delete</button>
                            <button>Done</button>
                            <button>Undo</button>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}
export default React.memo(Todolist2);