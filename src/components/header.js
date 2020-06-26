import React, { useState ,useContext } from "react";
import attach from "../images/search/attach.png";
import search from "../images/search/search.png";
import {Context} from '../context/chatContext'
const Header = () => {
  const {state :{data}} = useContext(Context)
  console.log(data)
  const [upload, setupload] = useState("");
  const onChangeFile = (event) => {
    var file = event.target.files[0];
    console.log(file);
    setupload(file); 
  };
  return (
    <div className="header">
      <div className="image">
        {/* <img id = "contactinfo" src = {require("../images/profiles/" +  + ".png")} alt ="logo"/> */}
        <img id="attach" src={attach} alt="Logo" />
        <img id="search" src={search} alt="Logo" />
      </div>
    </div>
  );
};
export default Header;
