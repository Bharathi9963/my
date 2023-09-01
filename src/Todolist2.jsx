import React, { createRef } from "react";
import { Ref } from "react";
import Address from "./Adress";

function Todolist2(props){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    var [ser,setser]=React.useState([])
    var firstnameref=createRef('')
    var lastnameref=createRef('')
    var addressref=createRef('')
    React.useEffect(()=>{
        firstnameref.current.focus()
    },[])

   
    function addtodo(){
        setTodos([...todos,ser])
       
    }
    function delTodo(i){
        var temp = [...todos]
        temp.splice(i,1)
        setTodos([...temp])
        //alert(i)
    }
    function lastnamefocus(ev){
        if(ev.key==='Enter'){
            lastnameref.current.focus()
        }
    }
    function addressfocus(ev){
        if(ev.key==='Enter'){
            addressref.current.focus()
        }
    }
    //template
    return (
        <div className="mybox">
            {console.log('hello')}
            <h1>Todolist</h1>
            <input type="text" onChange={(ev)=>{setser(ev.target.value)}}/>
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
            <input type='text' ref={firstnameref} onKeyUp={(ev)=>{lastnamefocus(ev)}}></input>
            <input type='text' ref={lastnameref} onKeyUp={(ev)=>{addressfocus(ev)}}></input>
           
            <Address ref={addressref}></Address>
        </div>
    )
}
export default React.memo(Todolist2);