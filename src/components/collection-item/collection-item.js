import React from "react";

import "./collection-item.scss";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="image"
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
