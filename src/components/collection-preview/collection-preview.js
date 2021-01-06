import React from "react";
import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;