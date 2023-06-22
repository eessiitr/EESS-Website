import React from "react";
import "./AcadsPage.css";
import GlassContainer from "../../UI/GlassContainer/GlassContainer";
import { useParams } from "react-router-dom";
import AcadsNavbar from "../Acads_navbar/Acads_navbar";
import AcadsData from "../Acads_data/Acads_data";

export default function AcadsPage() {
  const { year, semester } = useParams();
  return (
    <div className="Acads_dashboard">
      <AcadsNavbar year={year} semester={semester} />
      <GlassContainer>
        <AcadsData year={year} semester={semester} />
      </GlassContainer>
    </div>
  );
}
