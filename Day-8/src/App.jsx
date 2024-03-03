import React from 'react'
import Login from './Login'
import Signup from './Signup'
function App() {
  return (
    <main>
      <div className="left-container">
        <img src="login-image.jpg" alt="" className='login-image'/>
      </div>
      <div className="right-container">
        <form autoComplete='OFF'>
          <Login />
          {/* <Signup /> */}
       </form>
      </div>
    </main>
  )
}

export default App