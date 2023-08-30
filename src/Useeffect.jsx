import axios from "axios";
import React, { useEffect } from "react";

function Usd(){
    var [x,setX]=React.useState([])
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        setX(res.data)
        console.log(res.data)
    })
   },[])
    
    function Asc(){
        let data=[...x]
       let result= data.sort((a,b)=>{
            if(b.name<a.name){
                return 1
            }
            else{
                return -1
            }
            
        })
        setX(result)  
       
    }
    function Des(){
        let data=[...x]
       let result= data.sort((a,b)=>{
            if(a.name<b.name){
                return 1
            }
            else{
                return -1
            }
            
        })
        setX(result)  
       
    }
    function Sea(){
        var n=document.getElementById('dg')
      var g= x.filter((rec)=>{
        return (rec.name.toUpperCase().startsWith(n.value.toUpperCase()))
       })
       setX(g)
      
    }
    return(
        <div>
            <button onClick={()=>{Asc()}}>Ascending</button>
            <button onClick={()=>{Des()}}>Descending</button>
            <input type='text' id='dg' onChange={()=>{Sea()}}></input>
            { 
            <table border='2' style={{margin:'10px'}}>
                <tbody>
               {
                    x.map((c)=>{
                        return <tr><td>{c.name}</td><td>{c.username}</td><td>{c.email}</td></tr>
                      })
               }
               </tbody>
            </table>   
  
            }
        </div>
    )
}
export default Usd;