import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item-styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={size ? size : ""}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>shop now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
