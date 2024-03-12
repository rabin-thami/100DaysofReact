import { useState } from "react";

export default function InitState({ form, setForm, handleSubmit }) {
  const [firstInit, setFirstInit] = useState(true);
  const [secondInit, setSecondInit] = useState(false);
  const [userNameError, setUserNameError] = useState(false);

  
  function handleInit(e) {
    e.preventDefault();
    if (form.userName.trim() === "") {
      setUserNameError(true);
      setFirstInit(true);
      setSecondInit(false);
    } else {
      setFirstInit(false);
      setSecondInit(true);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInit(e);
    } else {
      return null;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="init">
      <h1>Welcome to Quizzical</h1>
      <p>Think you're clever? Prove it.</p>
      <form autoComplete="off" onSubmit={handleSubmit}>


      {firstInit && <div className="first-init">
          <label htmlFor="name">What should we call you?</label>
          <br />
          <input
            type="text"
            placeholder={`${userNameError ? "User Name is Empty" : "rabin"}`}
            name="userName"
            onKeyDown={handleKeyPress}
            onChange={handleChange}
            value={form.userName}
            className={`${userNameError ? "error-border" : ""}`}
          />
          <br />
          <button type="button" onClick={handleInit}>
            Next
          </button>
        </div>}


        {secondInit && <div className="second-init">
            <label htmlFor="category">Choose a category:</label>
            <br />
            <select
              name="category"
              id="category"
              onChange={handleChange}
              value={form.category}
            >
              <option value="any">Any Category</option>
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
              <option value="31">Japanese Anime &amp; Manga</option>
              <option value="32">Cartoon &amp; Animations</option>
            </select>
            <br />
            <button type="submit">Next</button>
          </div>}
      </form>
    </div>
  );
}
