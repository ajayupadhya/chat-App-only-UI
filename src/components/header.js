import React, { useState } from "react";
import attach from "../images/search/attach.png";
import search from "../images/search/search.png";

const Header = () => {

  const [upload, setupload] = useState("");
  const fileSelectedHandler = (event) => {
    setupload(event.target.files[0], () => this.fileUploadHandler());
  };
  return (
    <div className="header">
      <div className="image">
        <label htmlFor="myInput">
          {" "}
          <img id="attach" label="" src={attach} alt="Logo" />
        </label>
        <input
          id="myInput"
          style={{ display: "none" }}
          type={"file"}
          onChange={fileSelectedHandler}
        />
        <img id="search" src={search} alt="Logo" />
      </div>
    </div>
  );
};
export default Header;
