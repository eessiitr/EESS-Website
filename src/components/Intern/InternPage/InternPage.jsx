import React from "react";
import "./InternPage.css";
import InternData from '../Intern_data/Intern_data'
import GlassContainer from "../../UI/GlassContainer/GlassContainer";
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function InternPage() {
  const { category } = useParams();
  return (
    <div className="Intern_dashboard">
      <div className="Intern_navbar_body">
        <nav className="Intern_navbar_nav">
          <ul className="Intern_navbar__navMenu">
            <NavLink
              to={'/Intern/Intern'}
              className="Link"
              activeclassname="active"
            >
              <li>Internship</li>
            </NavLink>
            <NavLink
              to={'/Intern/Placement'}
              className="Link"
              activeclassname="active"
            >
              <li>Placements</li>
            </NavLink>
          </ul>
        </nav>
        <Outlet />
      </div>
      <GlassContainer>
        <InternData category={category} />
      </GlassContainer>
    </div>
  );
}
