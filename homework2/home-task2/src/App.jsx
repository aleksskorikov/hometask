
import './App.css'
import String from './Components/String';
import RenderComponent from './Components/RenderComponent';

function App() {
  const sampleStrings = ["Text 1", "Text 2", "Text 3"];

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <String strings={sampleStrings} />
      </div>

      <div>
        <RenderComponent>
          <h2>Привіт!!!</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam esse architecto porro fugiat officia itaque quasi, perspiciatis vitae consectetur quae iure reprehenderit alias. Hic voluptas sapiente tempora, totam voluptate laudantium!</p>
          <button>Click</button>  
        </RenderComponent>
      </div>
    </>
  )
}

export default App
