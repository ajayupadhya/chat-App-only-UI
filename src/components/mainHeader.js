import React from "react";
import im from "../images/profiles/ben.png";
import mess from "../images/search/message.svg";
const MainHeader = () => {
  return (
    <div className="MContacts">
      <ul className="Mullist">
        <li className="Mlist">
          <img id="Mphoto1" src={im} alt="Logo" />
           <img id="Mmess" src={mess} alt="Logo" />
        </li>
      </ul>
    </div>
  );
};

export default MainHeader;
