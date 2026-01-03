import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import "./OurTeam_navbar.css";

//image imports
import SecretaryIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Secretary_icon";

import FacultyIcon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Faculty_icon";

export default function OurTeam_navbar({ IsOnAbout }) {
  return (
    <div className="OurTeam_navbar_body">
      <nav className="OurTeam_navbar_nav">
        <ul className="OurTeam_navbar__navMenu">
          <NavLink
            to="/About/2025"
            className={`Link ${IsOnAbout ? "active" : ""}`}
            activeclassname="active"
          >
            <SecretaryIcon />
            <li>2025-26</li>
          </NavLink>
          <NavLink
            to="/About/2024"
            className="Link"
            activeclassname="active"
          >
            <SecretaryIcon />
            <li>2024-25</li>
          </NavLink>
          <NavLink to="/About/2023" className="Link" activeclassname="active">
            <SecretaryIcon />
            <li>2023-24</li>
          </NavLink>
          <NavLink
            to="/About/Faculty"
            className="Link"
            activeclassname="active"
          >
            <FacultyIcon />
            <li>Faculty</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
