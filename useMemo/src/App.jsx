import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function expensiveComputation(num) {
    console.log("inside expensive task called");
    for(let i = 0; i< 10000000000; i++) {}
    return num += 2;
  }
  let memoizedValue = useMemo(() => { expensiveComputation(5) }, []);
  return (
    <>
      <div className="card text-xl">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>

      <div>
        Count : {count}
      </div>

      <div>
        <h1 className="text-2xl">Memoized Value: {memoizedValue}</h1>
      </div>
    </>
  )
}

export default App
