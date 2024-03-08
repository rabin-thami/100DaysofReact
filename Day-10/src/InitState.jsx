import { useState } from "react"

export default function InitState({ setFormData, handleSubmit}) {

    const [firstInit, setFirstInit] = useState(true)
    const [secondInit, setSecondInit] = useState(false)

    function hendleCatagory(event){
        event.preventDefault()
        setFirstInit(false)
        setSecondInit(true)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({...prevFormData, [name]:value}))
    }

  return (
    <div className="init">
    <h1>Welcome to Quizzical</h1>
    <p>Think you're clever? Prove it.</p>
    <form autoComplete="off" onSubmit={handleSubmit}>
    {firstInit && <div className="first-init">
          <label htmlFor="name">What should we Call you?</label>
          <br />
          <input type="text" 
                 placeholder="Rabin"
                 name="userName"
                 onChange={handleChange}
                 value={FormData.userName}
          />
          <br />
          <button type="button" onClick={hendleCatagory}>Next</button>
        </div>}


        {/* Second Init Start from here */}

        {secondInit && <div className="second-init">
            <select name="category"
                    id="category" 
                    onChange={handleChange}
                    value={FormData.value}  
            >
            <option value="any">Select Category</option>
			<option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="13">Musicals &amp; Theatres</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Japanese Anime</option>
            <option value="32">Cartoon &amp; Animations</option>
            </select>
            <br />
            <button>Next</button>
          </div>}
    </form>
  </div>
  )
}