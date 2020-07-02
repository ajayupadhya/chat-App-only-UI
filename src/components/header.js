import React from "react";
import attach from "../images/search/attach.png";
import search from "../images/search/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <label htmlFor="myInput">
          {" "}
          <img id="attach" label="" src={attach} alt="Logo" />
        </label>

        <img id="search" src={search} alt="Logo" />
      </div>
    </div>
  );
};
export default Header;
