import './App.css'
import { useState, useCallback } from 'react'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  const OnClick = useCallback(() => setCount(count + 1), [])
  return (
    <div className="App">
      <div className="card">
        Count : {count}
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div>
        <ChildComponent button="Click" onClick={OnClick}/>
      </div>
      </div>
  )
}

export default App
