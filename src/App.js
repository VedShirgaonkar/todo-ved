import React  from 'react'
import { useState,useEffect } from "react";
import './App.css';


const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  console.log(list);
  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}


function App() {
 
  const [todo, setTodo] = useState(getLocalItems());
  const [input,setInput]=useState('');
  
  const AddTodo = (event)=>{
   // alert('I m working');
   event.preventDefault();

    
    //let cl = document.getElementById('myInp').value;
    if(input === ''){
      alert("enter data");
    }
    else{
      setTodo([...todo,input]);
    }
    
  }
  
  useEffect(() => {
    // storing input name
    localStorage.setItem("lists",JSON.stringify(todo));
  }, [todo]);

  function ClrTodo(){
    setTodo([]);
  }
    return (

       <div className = "App">
        
         
         <div className="myData">
         <h1>Todo App</h1>
         <input id="myInp" value={input} onChange={event=>setInput(event.target.value)}/> 
          <div className="FORM">
         <button type="submit" onClick={AddTodo}>AddTodo</button>
         <button type="submit" onClick={ClrTodo}>ClearTodo</button>

         </div>
         <div className = "MyApp">
         <ul>
          {todo.map(i=>(
            <li>{i}</li>
          ))}
         </ul>
         </div>
         </div>
         

        </div>
    );
}
/*
function App() {
 
  const [todo, setTodo] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("todo");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [input,setInput]=useState('');
  
  const AddTodo = (event)=>{
   // alert('I m working');
   event.preventDefault();
    setTodo([...todo,input]);
    

    
  }
  
  useEffect(() => {
    // storing input name
    localStorage.setItem("todo",JSON.stringify(todo));
  }, [todo]);
    return (

       <div className = "App">
        
         <h1>Todo App</h1>
         <input id="myInp" value={input} onChange={event=>setInput(event.target.value)}/> 
         <form>
         <button type="submit" onClick={AddTodo}>AddTodo</button>
         </form>
         
         <ul>
          {todo.map(i=>(
            <li>{i}</li>
          ))}
          

         </ul>

        </div>
    );
}*/

export default App;