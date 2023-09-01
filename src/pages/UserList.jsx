import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
import "./UserList.css";
import "./NavBar.css";

function UserList() {
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((rest) => {
        setUserdata(rest.data.data);
        console.log(rest);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userdata);

  return (
    <div>
      <NavBar />
      {userdata.map((item) => (
        <div>
          <h1>{item.email}</h1>
          <h2>{item.first_name}</h2>
          <button onClick={() => handleDetail(item.id)}>See more...</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
