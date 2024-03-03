
function Signup() {
  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <input 
          type="text" 
          name="username"
          placeholder="Username"
          id="username"
      />
      <input 
          type="password" 
          name="password"
          placeholder="Passowrd"
          id="passowrd"
      />
      <input 
          type="password" 
          name="confirm-password"
          placeholder="Confirm password"
          id="confirmPassword"
      />
      <button>Signup</button>
    </div>
  )
}

export default Signup