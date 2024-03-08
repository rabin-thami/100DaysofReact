import { useEffect, useState } from "react"
import InitState from "./InitState"
import Question from "./Question.jsx"
function App() {
  const [init, setInit] = useState(false)
  const [question, setQuestion] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState( {
    userName: "",
    category : ""
  })


  function handleInit(event) {
    event.preventDefault()
    setInit(true)
  }


  function handleSubmit(event){
    event.preventDefault()
    setInit(true)

  }

  useEffect(()=> {
    async function getDataFromApi() {
      setIsLoading(true)
      // `https://opentdb.com/api.php?amount=10&category=${formData.category}`
      const response = await fetch(`url`)
      const data = await response.json()
      console.log(data)
      setIsLoading(false); 


    }

    if( init || formData.category) {
      getDataFromApi()
    }

  }, [init, formData])
  
  return (
   <main>
    <div className="shapes first"></div>
    <div className="shapes second"></div>
      <div className="container">
      {!init && (<InitState 
          handleInit={handleInit}
          setFormData ={setFormData}
          handleSubmit={handleSubmit}

      />)}

      {init && !isLoading && <Question />}
        {isLoading && <p>Loading...</p>}
    </div>
   </main>
  )
}
export default App




