import React from "react";
import { useParams } from "react-router-dom";
import "./OurTeam.css";

import Heading from "../../UI/Heading/Heading";
import OurTeamNavbar from "./OurTeam_navbar/OurTeam_navbar";
import OurTeamData from "./OurTeam_data/OurTeam_data";

export default function OurTeam() {
  const { vertical } = useParams();
  return (
    <div className="OurTeam_body" id="OurTeam">
      <Heading name="OurTeam" />
      <div className="OurTeam_dashboard">
        <OurTeamNavbar IsOnAbout={vertical ? false : true} />
        <OurTeamData team={vertical ? vertical : "2025"} />
      </div>
    </div>
  );
}
