import logo from './logo.svg';
import './App.css';
import React,{useState,useRef,useEffect} from 'react'

function App() {
  const [inputValue,setInputValue] = useState("");
  const previousValue = useRef("");

  // const increment=()=>{
  //   setCounter(counter+1)
  //   console.log(counterEle)
  // }
  useEffect(()=>{
    previousValue.current=inputValue
  },[inputValue])
  return(
    <>
    <input value={inputValue} type='number' onChange={(e)=>{setInputValue(e.target.value)}}/>
    <p>current value:{inputValue}</p>
    <p>previous value: {previousValue.current}</p>
    {/* count:<span ref={counterEle}>{counter}</span> */}

    {/* <button onClick={increment}>increment</button> */}
    </>
  );
}

export default App;
