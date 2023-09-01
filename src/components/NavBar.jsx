import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <Link to={"/userlist"}>
        <h2>Home</h2>
      </Link>

      <Link to={"/:id"}>
        <h2>User</h2>
      </Link>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NavBar;
