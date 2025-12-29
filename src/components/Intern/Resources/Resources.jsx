import React from 'react';
import './Resources.css';

const Resources = ({ category }) => {
  return (
    <div className="Resources_container">
      <h2 className="Resources_title">Resources - {category}</h2>
      <div className="Resources_content">
        <p>Resources for {category} will be available here.</p>
        {/* Add resource links/files here */}
      </div>
    </div>
  );
};

export default Resources;

