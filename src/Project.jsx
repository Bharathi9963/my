import React from "react";

function Project(){
    
    return(
        <>
        <div>
           {
            <center><h1>Our Tours</h1></center>
           }
        </div>
        <div>
            <center>
            {
                <div style={{border:'1px solid',width:'40%',borderRadius:'5px'}}>
                    <img src='https://www.course-api.com/images/tours/tour-1.jpeg' style={{width:'100%'}}></img>
                    <div >
                        <div style={{display:'flex'}}>
                        <h1>Best of Paris in 7 days tour</h1>
                        <span style={{border:'1px solid',backgroundColor:'skyblue',height:'30px',marginLeft:'100px',padding:'0px 5px 0px 5px'}}>$1,997</span>
                        </div>
                        <p>Paris is synonymous with the finest things that culture can offer — in art,<br></br>
                             fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves<br></br> guide will immerse you in the very best of </p>
                        <center><span style={{border:'1px solid',padding:'0px 30px 0px 30px',marginRight:'50px'}}>Not Interested</span></center>
                    </div>
                </div >
            }
            </center>
        </div>
    </>
    )
}
export default Project;