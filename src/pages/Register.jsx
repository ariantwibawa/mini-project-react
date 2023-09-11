import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Login-Register.css";

const Register = () => {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmailRegister(e.target.value);
  };
  const handlePass = (e) => {
    setPasswordRegister(e.target.value);
  };
  const handleUsername = (e) => {
    setUsernameRegister(e.target.value);
  };

  const handleRegister = () => {
    const payLoad = {
      name: emailRegister,
      username: usernameRegister,
      password: passwordRegister,
      roleId: 2,
    };
    axios
      .post("https://api.mudoapi.tech/register", payLoad)
      .then((rest) => {
        navigate("/");
        console.log(rest);
      })
      .catch((err) => {
        console.log(err.response.data.messageTitle);
        setErrorRegister(err.response.data.messageTitle);
      });
  };

  console.log(emailRegister, passwordRegister, usernameRegister);

  return (
    <>
      <div className="login-first d-flex align-items-center py-4 bg-body-tertiary">
        <div className="box">
          <h1>Register</h1>
          <input
            className="form-style"
            onChange={handleEmail}
            type="text"
            placeholder="enter your name"
          />
          <input
            className="form-style2"
            onChange={handleUsername}
            type="text"
            placeholder="enter your username"
          />
          <input
            className="form-style2"
            onChange={handlePass}
            type="text"
            placeholder="enter your password"
          />

          {!!errorRegister.length && <p>{errorRegister}</p>}

          <button onClick={handleRegister}>Done</button>
          <Link to={"/"}>
            <h9>Already have an account?</h9>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Register;
