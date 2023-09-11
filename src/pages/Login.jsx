import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Login-Register.css";

const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmailLogin(e.target.value);
  };
  const handlePass = (e) => {
    setPasswordLogin(e.target.value);
  };
  const handleLogin = () => {
    const payLoad = {
      username: emailLogin,
      password: passwordLogin,
    };
    axios
      .post("https://api.mudoapi.tech/login", payLoad)
      .then((rest) => {
        localStorage.setItem("token", rest?.data?.data?.token);
        navigate("/userlist");
        console.log(rest);
      })
      .catch((err) => {
        console.log(err.response.data.messageTitle);
        setErrorLogin(err.response.data.messageTitle);
      });
  };

  console.log(emailLogin, passwordLogin);

  return (
    <>
      <div className="login-first d-flex align-items-center py-4 bg-body-tertiary">
        <div className="box">
          <h1>Login</h1>
          <input
            className="form-style"
            onChange={handleEmail}
            type="text"
            placeholder="enter your email"
          />
          <input
            className="form-style2"
            onChange={handlePass}
            type="text"
            placeholder="enter your password"
          />

          {!!errorLogin.length && <p>{errorLogin}</p>}

          <button onClick={handleLogin}>Login</button>
          <Link to={"/register"}>
            <h9>Create an account</h9>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
