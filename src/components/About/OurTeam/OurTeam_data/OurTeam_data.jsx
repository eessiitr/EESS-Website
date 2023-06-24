import React from 'react'
import './OurTeam_data.css';
import OurTeamData from "./OurTeamData.js";
import Insta_Icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Insta_icon';
import Linkedin_Icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Linkedin_icon';
import Mail_Icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Mail_icon';

export default function OurTeam_data({ team }) {
  return (
    <div id="team" className="ourTeam__container">
      <div className="ourTeam__member">
        {OurTeamData[team].map((obj, indx) => {
          return (
            <div key={indx} className="ourTeam__teamCard">
              <div className="img_container">
                <img src={obj.img} alt={obj.name} />
                <div className="img_hover_content">
                  <div className="content_mail"><a href={obj.mail} target="blank"><Mail_Icon/></a></div>
                  <div className="content_linkedin"><a href={obj.linkedin} target="blank"><Linkedin_Icon/></a></div>
                  <div className="content_insta"><a href={obj.insta} target="blank"><Insta_Icon/></a></div>
                </div>
              </div>
              <div className="ourTeam__memberName">{obj.name}</div>
              <div className="ourTeam__memberPos">{obj.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
