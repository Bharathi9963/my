import React from "react";

function ColourTodo(props){
    //state
    var [todos,setTodos]=React.useState([
       {
         title:'mango',
         status:false
       },
       {
        title:'Apple',
        status:true
      },
      {
        title:'Pineapple',
        status:false
      },
      {
        title:'watermelon',
        status:true
      },

    ])
    //logic
    
   function done(ind){
  var temp=[...todos]
  temp[ind].status===true?(temp[ind].status=false):(temp[ind].status=true)
  
  setTodos([...temp])


   }
   
    //template
    return (
        <div className="mybox">
            <h1>Todolist</h1>
          
            <ul>
                {
                    todos.map((todo,index)=>{
                        return <li style={todo.status===true?{backgroundColor:'green'}:{backgroundColor:'red'}}>{todo.title}
                        <button onClick={()=>{done(index)}}>Done</button>
                        
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default ColourTodo;