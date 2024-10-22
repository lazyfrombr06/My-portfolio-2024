import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // this is show incorrect detais when some one try to login only frontend
const [incorrect, setIncorrect]= useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/admin");
    }
  }, []);

  // API

  // const handleLogin = async () => {
  //   console.warn(userName, password);
  //   let result = await fetch("http://brajesh.tech/login", {
  //     method: "POST",
  //     body: JSON.stringify({ userName, password }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   result = await result.json();
  //   console.warn(result);
  //   if (result.name) {
  //     localStorage.setItem("user", JSON.stringify(result));
  //     navigate("/admin");
  //   } else {
  //     alert("encorrct details");
  //   }
  // };





  // check Field data in console
  const collectData = () => {
    console.log(userName, password);
  };
  return (
    <div className="login-component">
      <p className="welcome-msg-in-log-in-page">
        Welcome Brajesh, Have a nice day!
      </p>

      <div className="input-box-container-login">
        <h1 className="login-heading">LOGIN</h1>

        <div className="inp-box-container-login-each">
        <input
          type="text"
          className="input-box-of-login-page"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
</div>
<div className="inp-box-container-login-each inp-box-container-login-each-2">
        <input
          type={showPassword ? "text" : "password"}
          className="input-box-of-login-page"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />{" "}
        <button
          className="show-hide-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          <FaEye />
        </button>

        </div>

      <div className={incorrect?"incorrect-detais-false":"incorrect-detais-true" }>
       Incorrect username and password
      </div>
        <button
          className="submit-btn-of-login"
          // onClick={handleLogin}
          onClick={() => setIncorrect(!incorrect)}
          type="button"
        >
          Log In
        </button>
      </div>

      <Link to="/" className="link-to-go-to-home-login-page">
        Go to Home
      </Link>
    </div>
  );
};

export default Login;
