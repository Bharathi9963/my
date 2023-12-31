import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Todolist2 from './Todolist2';
import Todolist3 from './Todolist3';
import ColourTodo from './ColourTodo';

function App() {
  return (
    <div>
     
      <Counter s={23} i={10}></Counter>
      <Counter s={100} i={5}></Counter>
      <div className='mybox'>
        <h1>Indian Teams</h1>

      <Todolist title='Mumbai Indians' players={['Rohit','Surya','kishan','bhumra','david']}></Todolist>
      <Todolist title='Sunrises Hyderabad' players={['williansom','manish','bhumvi','warner','karan']}></Todolist>
      <Todolist title='Chennai superkings' players={['Dhoni','raina','jadeja','warner','karan']}></Todolist>
      <Todolist title='Royal Challengers Banglore' players={['williansom','manish','bhumvi','warner','karan']}></Todolist>
      <Todolist2></Todolist2>
      <Todolist3></Todolist3>
      <ColourTodo></ColourTodo>
      </div>

      
    </div>
  );
}

export default App;
