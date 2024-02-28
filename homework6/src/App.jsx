import { useState } from 'react';
import Tasck3 from './Components/tasck3';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasck3 />
    </>
  )
}

export default App
