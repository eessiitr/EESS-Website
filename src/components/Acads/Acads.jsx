import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import "./Acads.css";
import AcadsPage from "./AcadsPage/AcadsPage";
import Heading from "../UI/Heading/Heading";

export default function About() {
  const { year } = useParams();
  return (
    <div className="acads_body">
      <Heading name="Academics" />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/Acads/Freshmen/Autumn" replace />}
        />
        <Route
          path="/:year"
          element={<Navigate to={`/Acads/${year}/Autumn`} replace />}
        />
        <Route path={"/:year/:semester"} element={<AcadsPage />} />
      </Routes>
    </div>
  );
}
