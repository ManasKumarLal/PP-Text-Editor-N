import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ title, mode, modeToggler }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid user-select-none">
          <div className="navbar-brand d-flex align-items-center">
            <NavLink to="/" className={`text-decoration-none text-${mode==='light'?'black':'light'}`}><span>{title}</span></NavLink>
            <div className="form-switch mx-3 d-flex align-items-center gap-1">
              <input
                className="form-check-input fs-6"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={modeToggler}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label fs-6"
                htmlFor="flexSwitchCheckDefault"
                style={{ cursor: "pointer" }}
              >
                Enable DarkMode
              </label>
            </div>
          </div>

          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>

            <form className="d-flex">
              <input
              id="searchInputBox"
              name="search-box"
                className="search_input form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  "--inputPlaceholderColor":
                    mode === "dark" ? "white" : "black",
                  backgroundColor: mode === "dark" ? "black" : "white",
                  color: mode === "dark" ? "white" : "black",
                }}
              />
              <button className="btn btn-outline-success" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: propTypes.string,
};
Navbar.defaultProps = {
  title: "Title...",
};
