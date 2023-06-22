import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Acads_navbar.css";

export default function Acads_navbar({ year, semester }) {
  return (
    <div className="Acads_navbar_body">
      <nav className="Acads_navbar_nav">
        <ul className="Acads_navbar__navMenu">
          <NavLink
            to={`/Acads/Freshmen/${semester}`}
            className="Link"
            activeclassname="active"
          >
            <li>Freshmen</li>
          </NavLink>
          <NavLink
            to={`/Acads/Sophomores/${semester}`}
            className="Link"
            activeclassname="active"
          >
            <li>Sophomores</li>
          </NavLink>
          <NavLink
            to={`/Acads/PreFinal/${semester}`}
            className="Link"
            activeclassname="active"
          >
            <li>Pre-Final</li>
          </NavLink>
          <NavLink
            to={`/Acads/Final/${semester}`}
            className="Link"
            activeclassname="active"
          >
            <li>Final</li>
          </NavLink>
        </ul>
        <ul className="Acads_navbar__navMenu">
          <NavLink
            to={`/Acads/${year}/Autumn`}
            className="Link"
            activeclassname="active"
          >
            <li>Autumn</li>
          </NavLink>
          <NavLink
            to={`/Acads/${year}/Spring`}
            className="Link"
            activeclassname="active"
          >
            <li>Spring</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
