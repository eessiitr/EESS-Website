import React, { useState } from "react";
import "./Intern_data.css";
import InternData from "./InternData";
import ButtonAnimated from "../../UI/Button_animated/ButtonAnimate";
import Loader from "../../UI/Loader/Loader";

export default function Intern_data(prop) {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpansion = (index) => {
    console.log("reached here")
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const isExpanded = (index) => {
    return expandedIndexes.includes(index);
  };
  const filteredItems = InternData.filter((item) => item.Category === prop.category);

  return (
        <div className="Intern_card_container">
          {filteredItems.map((obj, idx) => {
            const expanded = isExpanded(idx);
            return (
              <div key={idx} className="Intern_card">
                <div className="Intern_image_Container">
                  <Loader />
                  <img src={obj.img} alt="" className="Intern_card_img" />
                </div>
                <div className="Intern_card_content">
                    <div className="Intern_descp">
                      {expanded
                        ? obj.description
                        : obj.description.substring(0, 400)}
                    </div>
                  {obj.description.length > 220 && (
                    <ButtonAnimated
                      onClick={() => toggleExpansion(idx)}
                      text={expanded ? "Read Less" : "Read More"}
                      className="Intern_button"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
  );
}

