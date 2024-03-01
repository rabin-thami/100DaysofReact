import { useState } from "react"
import Box from "./Box"

import boxes from "./boxes"


const App = () => {

  const [squares, setSquare] = useState(boxes)

  const squareElement = squares.map (square => {
    return  <Box
              key = {square.id}
              on =  {square.on}
              color = {square.color}
            />
  })


  return (
    <section>
      {squareElement}
    </section>
  )
}

export default App