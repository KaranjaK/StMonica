import React from "react";
import logo from "..//assets/Images/st monica logo 1.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-lg-none" href="#">
            <img className=" brand" src={logo}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Our Journey
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Our Ministry
                </a>
              </li>
              <a className="navbar-brand d-none d-lg-block" href="#">
                <img className=" brand" src={logo}></img>
              </a>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Church Groups
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
