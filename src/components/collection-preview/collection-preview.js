import React from "react";
import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.scss";

const CollectionPreview = ({ title, routeName, items, match }) => {
  return (
    <div className="collection-preview">
      <Link to={`${match.url}/${routeName}`} className="title">
        {title}
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
