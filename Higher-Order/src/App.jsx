import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function salary(num){
    return num*0.7;
  }

  setTimeout(() => salary(count), 300);

  return (
    <div>
      <h1>React App</h1>
    </div>
  )
}

export default App
