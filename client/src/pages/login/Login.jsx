import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginHome">
          <Link to="/" className="link">
            <FontAwesomeIcon icon={faArrowLeft} className="homeIcon" />
            <span className="homeText">Back home</span>
          </Link>
        </div>
        <div className="loginTop">
          <span className="Logo">SocialHub</span>
        </div>
        <form className="loginCenter" onSubmit={handleClick}>
          <div className="loginFields">
            <FontAwesomeIcon icon={faEnvelope} className="loginIcon" />
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="loginInput"
              required
            />
          </div>
          <div className="loginFields">
            <FontAwesomeIcon icon={faKey} className="loginIcon" />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="loginInput"
              minLength="6"
              required
            />
          </div>
          <button className="loginButton" type="submit" disabled={isFetching}>
            {isFetching ? "loading" : "Log in"}
          </button>
        </form>
        <div className="loginBottom">
          <Link to="/" className="link">
            <span className="loginForgot">Forgot Password</span>
          </Link>
          <br />
          <span className="newUser">New here?</span>
          <Link to="/" className="link">
            <span className="loginRegister">Create a New Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
