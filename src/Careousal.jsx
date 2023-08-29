import React from "react";

function Careousal(){
  var i=0;
  var ar=['https://images.mygoodtimes.in/wp-content/uploads/2019/03/25100542/Mahesh-Babu.jpg',"https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://images.unsplash.com/photo-1623473882999-2f33d6fc1d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"]
  function prev(){
    var x=document.getElementById('d1')
    if(i===0){
        i=ar.length-1
       
        x.src=ar[i]
    }
    else{
        i--
        x.src=ar[i]
    }
   }
   function next(){
    var x=document.getElementById('d1')
    if(i==ar.length-1){
        i=0
        x.src=ar[i]
    }
    else{
        i++;
        x.src=ar[i]
    }
   }
    return(
      <>{
      <div>
       <button onClick={()=>{prev()}}>Prev</button>
       <img src='https://images.mygoodtimes.in/wp-content/uploads/2019/03/25100542/Mahesh-Babu.jpg' id='d1' className="img"></img>
       <button onClick={()=>{next()}}>Next</button>
       
       </div>

}
   </>
    )
}
export default Careousal;