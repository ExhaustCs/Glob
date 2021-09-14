import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        {/* username */}
        <input
          className="loginInput"
          type="text"
          id=""
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        {/* password */}
        <input
          className="loginInput"
          type="password"
          id=""
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
      <button className=" loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
