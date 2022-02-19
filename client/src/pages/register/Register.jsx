import React, { useRef } from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordConfirm.current.value !== password.current.value) {
      passwordConfirm.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerHome">
          <Link to="/" class="link">
            <FontAwesomeIcon icon={faArrowLeft} className="homeIcon" />
            <span className="homeText">Back home</span>
          </Link>
        </div>
        <div className="registerTop">
          <span className="Logo">SocialHub</span>
        </div>
        <form className="registerCenter" onSubmit={handleClick}>
          <div className="registerFields">
            <FontAwesomeIcon icon={faUser} className="registerIcon" />
            <input
              type="text"
              ref={username}
              placeholder="Username"
              className="registerInput"
              required
            />
          </div>
          <div className="registerFields">
            <FontAwesomeIcon icon={faEnvelope} className="registerIcon" />
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="registerInput"
              required
            />
          </div>
          <div className="registerFields">
            <FontAwesomeIcon icon={faKey} className="registerIcon" />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="registerInput"
              required
              minLength="6"
            />
          </div>
          <div className="registerFields">
            <FontAwesomeIcon icon={faKey} className="registerIcon" />
            <input
              type="password"
              ref={passwordConfirm}
              placeholder="Confirm password"
              className="registerInput"
              required
              minLength="6"
            />
          </div>
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <div className="registerBottom">
          <span className="memberInfo">Already Member?</span>
          <Link to="/login" className="link">
            <span className="loginRegister">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
