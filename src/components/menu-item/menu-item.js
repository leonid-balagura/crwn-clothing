import React from "react";

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <span className="title">{title}</span>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
