import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Headers() {
  const isLoggedIn=localStorage.getItem("userData")
  console.log(isLoggedIn)
  const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("/api/logout/");

            localStorage.removeItem("userData");

            navigate("/login/");

        } catch (error) {
            console.log(error);
        }
    };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Link className="navbar-brand">Electricity Board</Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
            <Link className="nav-link active">Home</Link>
          </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/StatisticsCollection">
                <Link className="nav-link">
                  Dashboard Statistics
                </Link>
          </LinkContainer>

              </li>
              {isLoggedIn?(
              <li className="nav-item">
                <LinkContainer to="/logout">
                <Link className="nav-link" onClick={handleLogout} >  Logout
                </Link>
                </LinkContainer>
                
              </li>):(
                 <li className="nav-item">
                <LinkContainer to="/login">
                <Link className="nav-link" >  Login
                </Link>
                </LinkContainer>
                
              </li>
              )}
              
               
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Headers;
