import { useEffect, useState } from "react"
import InitState from "./InitState"
import Question from "./Question.jsx"
import data from "./data.js"

export default function App() {

  //for initline the user input
  const [init, setInit] = useState()
  const [form, setForm] = useState({
    userName : "",
    category : "",
    userIp : ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
  }


  useEffect(() => {
    async function getIP() {
      const res = await fetch("https://api.ipify.org/?format=json")
      const data = await res.json()
      setForm(prevData => ({...prevData, userIp: data.ip}))
    }
    getIP()

  },[])


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




