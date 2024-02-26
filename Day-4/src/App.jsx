
import { useState } from "react"
import "./index.css"

const App = () => {

  const [number, setNumber] = useState(0)

  const decrement = () => (setNumber(prevNumber => (prevNumber > 0 ? prevNumber - 1 : prevNumber)))

  const increment = () => (setNumber (prevNumber => prevNumber + 1))

  const reset = () => {
    setNumber(0)
  }


  return (
    <div className="container">
      <div className="counter-container">
        <div className="main">
          <h1> {number}</h1>
        </div>
        <button className="decrement" onClick= {decrement}> - </button>
        <button className="increment" onClick={increment}> + </button>
        <button className="Rest" onClick={reset}>Reset </button>
      </div>
    </div>
  )
}

export default App