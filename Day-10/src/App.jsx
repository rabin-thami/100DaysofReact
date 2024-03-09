import { useEffect, useState } from "react"
import InitState from "./InitState"
import Question from "./Question.jsx"
import data from "./data.js"

export default function App() {

  //for initline the user input
  const [init, setInit] = useState()


  const [form, setForm] = useState({
    userName : "",
    category : ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)

  }



  return (
   <main>
    <div className="shapes first"></div>
    <div className="shapes second"></div>
      <div className="container">
      <InitState
          form = {form}
          setForm = {setForm}
          handleSubmit ={handleSubmit}
      />
    </div>
   </main>
  )
}




