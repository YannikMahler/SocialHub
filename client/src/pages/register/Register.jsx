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
          <Link to="/" class="links">
            <FontAwesomeIcon icon={faArrowLeft} className="homeIcon" />
            <span className="homeText">Back home</span>
          </Link>
        </div>
        <div className="registerTop">
          <span className="Logo">SocialHub</span>
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
          <button className="registerButton">Register</button>
          <span className="memberInfo">Already Member?</span>
          <Link to="/login">
            <span className="loginRegister">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
