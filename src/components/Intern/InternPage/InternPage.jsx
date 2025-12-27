import React, { useState } from "react";
import "./InternPage.css";
import InternData from '../Intern_data/Intern_data'
import Projects from '../Projects/Projects'
import Resources from "../Resources/Resources";
import GlassContainer from "../../UI/GlassContainer/GlassContainer";
import { useParams, NavLink, Outlet, useLocation, Routes, Route } from "react-router-dom";

export default function InternPage() {
  const { category, section } = useParams();
  const location = useLocation();
  const [internDropdownOpen, setInternDropdownOpen] = useState(false);
  const [placementDropdownOpen, setPlacementDropdownOpen] = useState(false);

  const isInternActive = location.pathname.includes('/Intern/Intern');
  const isPlacementActive = location.pathname.includes('/Intern/Placement');

  return (
    <div className="Intern_dashboard">
      <div className="Intern_navbar_body">
        <nav className="Intern_navbar_nav">
          <ul className="Intern_navbar__navMenu">
            <li 
              className="Intern_dropdown_container"
              onMouseEnter={() => setInternDropdownOpen(true)}
              onMouseLeave={() => setInternDropdownOpen(false)}
            >
              <div className={`Intern_dropdown_button ${isInternActive ? 'active' : ''}`}>
                Internship
              </div>
              {internDropdownOpen && (
                <ul className="Intern_dropdown_menu">
                  <li>
                    <NavLink
                      to={'/Intern/Intern/InternData'}
                      className="Intern_dropdown_link"
                      activeclassname="active"
                    >
                      Intern Data
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/Intern/Intern/Resources'}
                      className="Intern_dropdown_link"
                      activeclassname="active"
                    >
                      Resources
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li 
              className="Intern_dropdown_container"
              onMouseEnter={() => setPlacementDropdownOpen(true)}
              onMouseLeave={() => setPlacementDropdownOpen(false)}
            >
              <div className={`Intern_dropdown_button ${isPlacementActive ? 'active' : ''}`}>
                Placements
              </div>
              {placementDropdownOpen && (
                <ul className="Intern_dropdown_menu">
                  <li>
                    <NavLink
                      to={'/Intern/Placement/PlacementData'}
                      className="Intern_dropdown_link"
                      activeclassname="active"
                    >
                      Placement Data
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/Intern/Placement/Resources'}
                      className="Intern_dropdown_link"
                      activeclassname="active"
                    >
                      Resources
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="Intern/InternData" element={
          <GlassContainer>
            <InternData category="Intern" />
          </GlassContainer>
        } />
        <Route path="Intern/Resources" element={
          <GlassContainer>
            <Resources category="Intern" />
          </GlassContainer>
        } />
        <Route path="Placement/PlacementData" element={
          <GlassContainer>
            <InternData category="Placement" />
          </GlassContainer>
        } />
        <Route path="Placement/Resources" element={
          <GlassContainer>
            <Resources category="Placement" />
          </GlassContainer>
        } />
        <Route path="*" element={
          <GlassContainer>
            <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
              Select an option from the menu above
            </div>
          </GlassContainer>
        } />
      </Routes>
      <div className="Intern_projects_section">
        <GlassContainer>
          <Projects />
        </GlassContainer>
      </div>
    </div>
  );
}
