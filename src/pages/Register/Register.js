import './register.css'

const Register = () => {
    return (
        <div className="registerContainer">
      <div className="registerWrapper">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            type="email"
            placeholder="Enter your Username"
            className="registerInput"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="registerInput"
          />
          <label>password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password"
          />
          <div className="registerButton">Register</div>
        </form>
        <span className="registerOption">or</span>
        <button className="loginBtn">Login</button>
      </div>
    </div>
    )
}

export default Register;