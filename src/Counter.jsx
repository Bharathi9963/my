import React from 'react';
function Counter(props){
    var[count,setCount]=React.useState(props.s)
    function abc(){
        setCount(count+props.i)
    }
    function cba(){
        setCount(count-props.i)
    }
    return(
        <div className='mybox'>
            <h1>Counter:{count}</h1>
            <button onClick={abc}>Increment</button>
            <button onClick={cba}>Decrement</button>
        </div>
    )
}
export default Counter;