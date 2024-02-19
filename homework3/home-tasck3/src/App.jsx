import { useState } from 'react'
import './App.css'
import Hello from './Components/Hello'
import NamesList from './Components/NamesList'
import Counter from './Components/Counter'
import Lists from './Components/Lists'
import Render from './Components/Render'
import Product from './Components/product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello />
      <hr />
      <NamesList />
      <hr />
      <Product />
      <hr />
      {/* <Counter /> */}
      <Lists />
      <hr />
      <Render />
      
    </>
  )
}

export default App
