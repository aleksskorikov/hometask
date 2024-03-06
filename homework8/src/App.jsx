import { useState } from 'react';
import Task2 from './Components/task2';
import Task3 from './Components/task3';
import Task4 from './Components/task4';
import Tasc5 from './Components/task5';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task2 />
      <hr />
      <Task3 />
      <hr />
      <Task4 />
      <hr />
      <Tasc5 />
    </>
  )
}

export default App
