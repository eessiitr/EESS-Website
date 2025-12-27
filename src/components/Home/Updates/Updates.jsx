import React, { useState, useEffect } from "react";

import "./Update.css";
import UpdateData from "./UpdateData";
import GlassContainer from "../../UI/GlassContainer/GlassContainer";
import Heading from "../../UI/Heading/Heading";
import ButtonAnimate from "../../UI/Button_animated/ButtonAnimate";
import Loader from "../../UI/Loader/Loader";
import SheetsService from "../../../services/sheetsService";

export default function Updates() {
  const [updates, setUpdates] = useState(UpdateData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpdates = async () => {
      try {
        const sheetsData = await SheetsService.fetchUpdates();
        if (sheetsData && sheetsData.length > 0) {
          // Transform Google Sheets data to match component structure
          const transformedData = sheetsData.map(item => ({
            img: item.imageUrl,
            header: item.title,
            description: item.description,
            link: item.resources.length > 0 ? item.resources[0].link : '#',
            resources: item.resources,
          }));
          setUpdates(transformedData);
        }
      } catch (error) {
        console.error('Error loading updates:', error);
        // Fallback to static data (already set in useState)
      } finally {
        setLoading(false);
      }
    };

    loadUpdates();
  }, []);

  return (
    <div className="UpdateContainer" id="Updates">
      <GlassContainer>
        <Heading name="Updates" />
        {loading ? (
          <div className="Update_loading">
            <Loader />
          </div>
        ) : (
          <div className="Update_card_container">
            {updates.map((obj, idx) => {
              return (
                <div key={idx} className="Update_card">
                  <div className="Update_image_Container">
                    <Loader />
                    <img src={obj.img} alt={obj.header} className="Update_card_img" />
                  </div>
                  <div className="Update_card_content">
                    <div className="Update_content_text">
                      <div className="Update_heading">{obj.header}</div>
                      <div className="Update_descp">
                        {obj.description.substring(0, 220)}
                      </div>
                    </div>
                    <ButtonAnimate
                      link={obj.link}
                      text="Know More"
                      className="Update_button"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </GlassContainer>
    </div>
  );
}
