import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Login-Register.css"

const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmailLogin(e.target.value);
  };
  const handlePass = (e) => {
    setPasswordLogin(e.target.value);
  };
  const handleLogin = () => {
    const payLoad = {
      email: emailLogin,
      password: passwordLogin,
    };
    axios
      .post("https://reqres.in/api/login", payLoad)
      .then((rest) => {
        localStorage.setItem("token", rest.data.token);
        navigate("/userlist");
        console.log(rest);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(emailLogin, passwordLogin);

  return (
    <>
      <h1>Login</h1>
      <input
        onChange={handleEmail}
        type="text"
        placeholder="enter your email"
      />
      <input
        onChange={handlePass}
        type="text"
        placeholder="enter your password"
      />

      <button onClick={handleLogin}>Login</button>
      <Link to={"/register"}>
        <h4>Create an account</h4>
      </Link>
    </>
  );
};

export default Login;
