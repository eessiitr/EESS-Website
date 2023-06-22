import React, { useState } from "react";
import "./Acads_data.css";
import AcadsData from "./AcadsData.js";
import RightArrow from "../../../Assets/Icons/YellowRightArrow.svg";

export default function Acads_data({ year, semester }) {
  const [expandedCourses, setExpandedCourses] = useState([]);
  const [expandedSections, setExpandedSections] = useState([]);

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

  return (
    <div className="Acads_card_container">
      {Object.keys(AcadsData[year][semester]).map((course) => (
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
              {Object.keys(AcadsData[year][semester][course]).map((section) => (
                <div key={section} className="course_materials">
                  <div
                    className={`section ${
                      isSectionExpanded(section) ? "expanded" : ""
                    }`}
                    onClick={() => handleSectionClick(section)}
                  >
                    <img
                      src={RightArrow}
                      alt="Expand"
                      className={isSectionExpanded(section) ? "expanded" : ""}
                    />
                    {section}
                  </div>
                  {isSectionExpanded(section) && (
                    <div className="section_details">
                      <a href={AcadsData[year][semester][course][section].link}>
                        Click Here
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
