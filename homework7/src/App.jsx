import { useState } from 'react';
import './App.css';
import Tasck3 from './Components/tasck3';
import Tasck4 from './Components/tasck4/tasck4';
import Tasck6 from './Components/tasck6';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasck3 />
      <hr />
      <Tasck4 />
      <hr />
      <Tasck6 />
    </>
  )
}

export default App
