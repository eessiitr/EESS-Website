import React, { useState, useEffect } from "react";
import "./Acads_data.css";
import AcadsDataStatic from "./AcadsData.jsx";
import RightArrow from "../../../Assets/Icons/YellowRightArrow.svg";
import SheetsService from "../../../services/sheetsService";

export default function Acads_data({ year, semester }) {
  const [acadsData, setAcadsData] = useState(AcadsDataStatic);
  const [loading, setLoading] = useState(true);
  const [expandedCourses, setExpandedCourses] = useState([]);
  const [expandedSections, setExpandedSections] = useState([]);

  useEffect(() => {
    const loadAcademics = async () => {
      try {
        const sheetsData = await SheetsService.fetchAcademics();
        if (sheetsData && Object.keys(sheetsData).length > 0) {
          setAcadsData(sheetsData);
        }
      } catch (error) {
        console.error('Error loading academics data:', error);
        // Fallback to static data (already set in useState)
      } finally {
        setLoading(false);
      }
    };

    loadAcademics();
  }, []);

  const handleCourseClick = (course) => {
    if (isCourseExpanded(course)) {
      setExpandedCourses(expandedCourses.filter((c) => c !== course));
    } else {
      setExpandedCourses([...expandedCourses, course]);
    }
  };

  const handleSectionClick = (section) => {
    if (isSectionExpanded(section)) {
      setExpandedSections(expandedSections.filter((s) => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const isCourseExpanded = (course) => {
    return expandedCourses.includes(course);
  };

  const isSectionExpanded = (section) => {
    return expandedSections.includes(section);
  };

  if (loading) {
    return (
      <div className="Acads_card_container" style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Loading academic data...</p>
      </div>
    );
  }

  if (!acadsData[year] || !acadsData[year][semester]) {
    return (
      <div className="Acads_card_container" style={{ textAlign: 'center', padding: '2rem' }}>
        <p>No data available for {year} - {semester}</p>
      </div>
    );
  }

  return (
    <div className="Acads_card_container">
      {Object.keys(acadsData[year][semester]).map((course) => (
        <div key={course} className="Acads_card">
          <div
            className={`course ${isCourseExpanded(course) ? "expanded" : ""}`}
            onClick={() => handleCourseClick(course)}
          >
            <img
              src={RightArrow}
              alt="Expand"
              className={isCourseExpanded(course) ? "expanded" : ""}
            />
            {course}
          </div>
          {isCourseExpanded(course) && (
            <div className="course_materials_container">
              {Object.keys(acadsData[year][semester][course]).map((section) => (
                <div key={section} className="course_materials">
                  <div
                    className={`section ${isSectionExpanded(section) ? "expanded" : ""
                      }`}
                    onClick={() => handleSectionClick(section)}
                  >
                    <div className="section_details">
                      <ul>
                        {acadsData[year][semester][course][section].map(
                          (link, index) => (
                            <li key={index}>
                              {link ? (
                                <a href={link} target="blank">{section}</a>
                              ) : (
                                <span>Yet to be updated</span>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
