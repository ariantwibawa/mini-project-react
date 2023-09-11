import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./DetailUser.css";

const DetailUser = () => {
  const param = useParams();
  const [detailUser, setDetailUser] = useState({});
  const getDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.id}`)
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
    <div className="login-first3">
      <div>
        <NavBar />
        <h2>{detailUser.description}</h2>
      </div>
    </div>
  );
};

export default DetailUser;
