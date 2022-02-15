import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerHome">
          <FontAwesomeIcon icon={faArrowLeft} className="homeIcon" />
          <span className="homeText">Back home</span>
        </div>
        <div className="registerTop">
          <div className="imgDiv">
            <img src="./assets/SocialHub.png" alt="logo" className="logoImg" />
          </div>
        </div>
        <div className="registerCenter">
          <div className="registerFields">
            <FontAwesomeIcon icon={faUser} className="registerIcon" />
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
            />
          </div>
          <div className="registerFields">
            <FontAwesomeIcon icon={faEnvelope} className="registerIcon" />
            <input type="email" placeholder="Email" className="registerInput" />
          </div>
          <div className="registerFields">
            <FontAwesomeIcon icon={faKey} className="registerIcon" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
          </div>
          <div className="registerFields">
            <FontAwesomeIcon icon={faKey} className="registerIcon" />
            <input
              type="password"
              placeholder="Confirm password"
              className="registerInput"
            />
          </div>
        </div>
        <div className="registerBottom">
          <button className="registerButton">Log in</button>
          <span className="registerForgot">Forgot Password?</span>
          <br />
          <span className="registerRegister">Create a New Account</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
