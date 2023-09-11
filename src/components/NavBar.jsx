import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="nv">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link to={"/userlist"} class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
            </ul>
            <form class="d-flex" role="search">
              <button onClick={handleLogout}>Logout</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

{
  /* <nav class="navbar bg-body-tertiary">
        <div class="container">
          <Link to={"/userlist"} class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav> */
}
