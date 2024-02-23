import { useState } from 'react';
import Tasck2 from './components/tasck2';
import Tasck3 from './components/tasck3';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasck2 />
      <hr />
      <Tasck3 />
    </>
  )
}

export default App
