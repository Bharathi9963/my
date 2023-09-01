import React from "react";


function Dark(){
   
     var [articles,setarticles] = React.useState([
        {
          id: 1,
          title: 'the WET Codbase',
          date: (2020, 9, 4),
          length: 11,
          snippet: `Come waste your time with me`,
        },
        {
          id: 2,
          title: 'goodby, clean code',
          date: (2019, 10, 22),
          length: 5,
          snippet: `Let clean code guide you. Then let it go.`,
        },
        {
          id: 3,
          title: 'my decade in review',
          date: (2018, 7, 11),
          length: 5,
          snippet: `A personal reflection.`,
        },
        {
          id: 4,
          title: 'what are the react team principles',
          date: (2015, 5, 4),
          length: 5,
          snippet: `UI Before API.`,
        },
      ])
      var dd=document.getElementById('dd')
    
      
     
     
     function darkme(){
       
       if(dd.style.backgroundColor==='white'){
         dd.style.backgroundColor='black'
       }
       else{
        dd.style.backgroundColor='white'
       
       }
     }
    
    return(
        <center>
        <div style={{backgroundColor:'white'}} id='dd'>
            <h1>Overreacted</h1>
            <button onClick={()=>{darkme()}}>Darkme</button>
          {
            articles.map((a)=>{
                return <div><div  style={{color:'orange',margin:'50px' }}>{a.title}</div>
               
                
                <div>{a.snippet}</div>
              <div>{a.date}</div>
                </div>
            })
          }
        </div>
        </center>

    )
}
export default Dark;