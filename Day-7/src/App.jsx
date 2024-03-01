import { useState } from "react"
import Box from "./Box"

import boxes from "./boxes"


const App = () => {

  const [squares, setSquare] = useState(boxes)

  function toggle(id) {
    setSquare( prevSqu => {
      return prevSqu.map((Squ) => {
        return Squ.id === id ? {...Squ, on: !Squ.on} : Squ
      })
    })
  }

  const squareElement = squares.map (square => {
    return  <Box
              key = {square.id}
              on =  {square.on}
              color = {square.color}
              handelClick = {() => toggle(square.id)}
            />
  })

  return (
    <section>
      {squareElement}
    </section>
  )
}

export default App