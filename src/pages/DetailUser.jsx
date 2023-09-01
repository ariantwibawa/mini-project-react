import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./NavBar.css"

const DetailUser = () => {
  const param = useParams();
  const [detailUser, setDetailUser] = useState({});
  const getDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((rest) => {
        setDetailUser(rest.data.data);
        console.log(rest);
      })
      .catch((err) => {
        console.log(err);
      });
  };

useEffect(() => {
    getDetail();
}, []);

  return (
    <div>
        <NavBar/>
        <h1>{detailUser.first_name}</h1>
        <h1>{detailUser.email}</h1>
    </div>
  );
};

export default DetailUser;
