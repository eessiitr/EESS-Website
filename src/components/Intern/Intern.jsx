import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Intern.css";
import InternPage from "./InternPage/InternPage";
import Heading from "../UI/Heading/Heading"

export default function Intern() {
  return (
    <div className="intern_body">
    <Heading name="Intern Diaries" />
      <Routes>
      <Route
          path="/"
          element={<Navigate to="/Intern/Intern" replace />}
        />
        <Route path={"/:category"} element={<InternPage />} />
      </Routes>
    </div>
  );
}
