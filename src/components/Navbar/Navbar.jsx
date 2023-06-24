import { React, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";
import "./Navbar.css";

import logo from "../../Assets/logo.png";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const HamburgerHandler = () => {
    setIsHamburgerOpen((prevstate) => {
      return !prevstate;
    });
  };

  const LinkHandler = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <>
      <div className="navbar__container">
        <nav className="navbar__nav">
          <img src={logo} alt="" className="navbar__logo" />

          <ul
            className={`navbar__navMenu ${isHamburgerOpen ? "" : " notActive"}`}
          >
            <NavLink
              onClick={LinkHandler}
              to="/"
              className="Link"
              activeclassname="active"
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              onClick={LinkHandler}
              to="/About"
              className="Link"
              activeclassname="active"
            >
              <li>About</li>
            </NavLink>

            <NavLink
              onClick={LinkHandler}
              to="/Events"
              className="Link"
              activeclassname="active"
            >
              <li>Events</li>
            </NavLink>

            <NavLink
              onClick={LinkHandler}
              to="/Intern"
              className="Link"
              activeclassname="active"
            >
              <li>Intern</li>
            </NavLink>

            <NavLink
              onClick={LinkHandler}
              to="/Acads"
              className="Link"
              activeclassname="active"
            >
              <li>Academics</li>
            </NavLink>
          </ul>
        </nav>
        <Hamburger isOpen={isHamburgerOpen} onClick={HamburgerHandler} />
      </div>
      <Outlet />
    </>
  );
}
