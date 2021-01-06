import React from "react";
import MenuItem from "../menu-item/menu-item";
import SECTIONS_DATA from "./sections.data";

import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}

export default Directory;
