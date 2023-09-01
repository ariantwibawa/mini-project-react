import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Login-Register.css"

const Register = () => {
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const navigate = useNavigate();
    const handleEmail = (e) => {
      setEmailRegister(e.target.value);
    };
    const handlePass = (e) => {
      setPasswordRegister(e.target.value);
    };
    const handleRegister = () => {
      const payLoad = {
        email: emailRegister,
        password: passwordRegister,
      };
      axios
        .post("https://reqres.in/api/register", payLoad)
        .then((rest) => {
          localStorage.setItem("token", rest.data.token);
          navigate("/");
          console.log(rest);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    console.log(emailRegister, passwordRegister);
  
    return (
      <>
        <h1>Register</h1>
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
  
        <button onClick={handleRegister}>Register</button>
        <Link to={"/"}>
          <h4>Already have an account?</h4>
        </Link>
      </>
    );
  };
export default Register