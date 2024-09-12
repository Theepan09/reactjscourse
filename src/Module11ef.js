import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

const Module11ef = () => {
    const[count,setCount] = useState(0)

    useEffect(()=>{
        document.title = 'You clicked ${count} times';
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        setCount(count +1)
    }

  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You clicked {count} times</p>
        <button type="submit" onClick={handleClick}>Click Me!!!!</button>
      </header>
    </div>
  );
}

export default Module11ef
