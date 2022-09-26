import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();
  const increment = () =>{
    dispatch({type: "INC"})
  }
  const decrement = () =>{
    dispatch({type: "DEC"})

  }
  const addBy = () =>{
    dispatch({type: "PLUS", payload : 21})
  }
  return (
    <div className="App">
      <h1>counter App</h1>      
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Plus Input</button>

    </div>
  );
}

export default App;
