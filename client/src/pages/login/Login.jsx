import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginHome">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="homeIcon" />
            <span className="homeText">Back home</span>
          </Link>
        </div>
        <div className="loginTop">
          <span className="Logo">SocialHub</span>
        </div>
        <div className="loginCenter">
          <div className="loginFields">
            <FontAwesomeIcon icon={faEnvelope} className="loginIcon" />
            <input type="email" placeholder="Email" className="loginInput" />
          </div>
          <div className="loginFields">
            <FontAwesomeIcon icon={faKey} className="loginIcon" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
          </div>
        </div>
        <div className="loginBottom">
          <button className="loginButton">Log in</button>
          <span className="loginForgot">Forgot Password</span>
          <br />
          <span className="newUser">New here?</span>
          <span className="loginRegister">Create a New Account</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
