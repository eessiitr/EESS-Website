import React from "react";
import PropTypes from "prop-types";
import "./OurTeam_data.css";
import OurTeamData from "./OurTeamData.jsx";
import Insta_Icon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Insta_icon";
import Linkedin_Icon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Linkedin_icon";
import Mail_Icon from "../../../../Assets/OurTeam_imgs/OurTeam_icons/Mail_icon";

export default function OurTeam_data({ team }) {
  // Guard against missing team or invalid data to avoid runtime errors
  const members = Array.isArray(OurTeamData[team]) ? OurTeamData[team] : [];

  return (
    <div id="team" className="ourTeam__container">
      <div className="ourTeam__member">
        {members.length === 0 ? (
          <div className="ourTeam__noMembers">No members to display.</div>
        ) : (
          members.map((obj, indx) => {
            return (
              <div key={indx} className="ourTeam__teamCard">
                <div className="img_container">
                  <img src={obj.img} alt={obj.name} />
                  <div className="img_hover_content">
                    {obj.mail && (
                      <div className="content_mail">
                        <a
                          href={obj.mail}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail_Icon />
                        </a>
                      </div>
                    )}
                    {obj.linkedin && (
                      <div className="content_linkedin">
                        <a
                          href={obj.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin_Icon />
                        </a>
                      </div>
                    )}
                    {obj.insta && (
                      <div className="content_insta">
                        <a
                          href={obj.insta}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Insta_Icon />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="ourTeam__memberName">{obj.name}</div>
                <div className="ourTeam__memberPos">{obj.position}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

OurTeam_data.propTypes = {
  team: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
