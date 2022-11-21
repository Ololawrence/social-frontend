import axios from "axios";
import {Link} from 'react-router-dom';
import { useRef, useContext } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const { isFetching } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lawsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lawsocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              autoComplete="true"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              autoComplete="true"
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
             {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "signup"
              )}
            </button>
            <Link to="/login" style={{display:"flex",justifyContent:"center", textDecoration:"none", width:"100%"}}>

            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
