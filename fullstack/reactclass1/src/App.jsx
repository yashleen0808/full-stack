import React, { useState } from "react";
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  function increment  () {
    setCount(count + 1);
  };
 return(
  <div>
    <h1>{count}</h1>
    <button onClick={increment}>Click</button>
    {/* <div>Hello world</div>
    <Parent></Parent>
    {Parent()} */}
    
    {/* const [count, setCount] = useState(0);
    const incerement = () = > {
      setCount(count + 1);
    } */}
  </div>
  
 );
}

// function Parent(){
//   return(
    
//     <div>
//       <h1>Parent</h1>
//       <Child Name="Kashish" age="23"></Child>
//     </div>
    

    
//   )
// }
// function Child(p){
//   return(
//     <div>
//       <h3>Name: {p.Name}</h3>
//       <h4>age: {p.age}</h4>
//       <h1>Child</h1>
//     </div>
//   )
// }
  

export default App
