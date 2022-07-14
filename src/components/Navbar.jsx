import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const menuEmpezar = () => {
    const toggle = document.getElementById("header-toggle"),
      nav = document.getElementById("nav-bar"),
      bodypd = document.getElementById("body-pd"),
      headerpd = document.getElementById("header");

    // // show navbar
    nav.classList.toggle("show-navbar");
    // change icon
    toggle.classList.toggle("bx-x");
    // add padding to body
    bodypd.classList.toggle("body-pd");
    // add padding to header
    headerpd.classList.toggle("body-pd");

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    // Your code to run since DOM is loaded and ready
  };

  return (
    <div id="body-pd">
      <header className="header" id="header">
        <div className="header_toggle">
          <i
            className="bx bx-menu"
            onClick={() => menuEmpezar()}
            id="header-toggle"
          ></i>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <NavLink to="/#" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">Home</span>
            </NavLink>
            <div className="nav_list">
              <NavLink to="/#" className="nav_link">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </NavLink>
              <NavLink to="/#" className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Users</span>
              </NavLink>
              <NavLink to="/listaDeMateriales" className="nav_link">
                <i className="bx bx-message-square-detail nav_icon"></i>
                <span className="nav_name">Materiales</span>
              </NavLink>
              <NavLink to="/#" className="nav_link">
                <i className="bx bx-bookmark nav_icon"></i>
                <span className="nav_name">Bookmark</span>
              </NavLink>
              <NavLink to="/#" className="nav_link">
                <i className="bx bx-folder nav_icon"></i>
                <span className="nav_name">Files</span>
              </NavLink>
              <NavLink to="/#" className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span className="nav_name">Stats</span>
              </NavLink>
            </div>
          </div>
          <NavLink to="/#" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export { Navbar };
