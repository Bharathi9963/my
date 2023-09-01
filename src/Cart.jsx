import React from "react";
import axios from "axios";
function Shop(){
    var [products,setproducts]=React.useState([])
    var [cart,setcart]=React.useState([])
    React.useEffect(function(){
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        setproducts([...res.data])
      })
    },[])
    function addtocart(a){
       a.count=1
       setcart([...cart,a])
    }
    function addto(b){
        b.count++
        setcart([b])
        setcart([...cart])
    }
    function add(c){
        c.count--
        setcart([c])
        setcart([...cart])
    }
    return(
        <div className="d-flex flex-wrap">
            <div className="w-75">
            <ul className="d-flex flex-wrap">
            {
                products.map((a,i)=>{
                    return <div className="card m-2" style={{width: '12rem'}}>
                    <img className="card-img-top" src={a.image} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{a.title}</h5>
                      <p class="card-text">{a.price}</p>
                      <button onClick={()=>{addto(a,i)}}>+</button>
                     
                      <button onClick={(event)=>{addtocart(a,i,event.target.style.display='none')}} id='dd'>Add to Cart</button>
                     
                      <button onClick={()=>{add(a,i)}}>-</button>
                      
                    </div>
                  </div>
                })
            }
           </ul>
            </div>
            <div className="w-25">
               {
               
                cart.length>0 && cart.map((b,ind)=>{
                    return <li>{b.title}:{b.count}
                    <button onClick={()=>{addto(b,ind)}}>+</button>
                    <button onClick={()=>{add(b,ind)}}>-</button>

                    </li>
                })
               }
               
            </div>
           
        </div>
    )
}
export default Shop;