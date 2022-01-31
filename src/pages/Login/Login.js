import "./login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="loginInput"
          />
          <label>password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password"
          />
          <div className="loginButton">Login</div>
        </form>
        <span className="loginOption">or</span>
        <button className="registerBtn">Register</button>
      </div>
    </div>
  );
};

export default Login;
