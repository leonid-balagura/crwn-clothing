import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";

import SHOP_DATA from "./shop.data";
import "./shop-page.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
