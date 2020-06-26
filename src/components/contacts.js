import React from "react";
import im1 from "../images/profiles/ben.png";
import MainHeader from "./mainHeader";
import Searchbar from "./searchbar";
import { Context } from "../context/chatContext";

const Contacts = () => {
  const {
    state: { contacts }, tochat
  } = React.useContext(Context);
  return (
    <div className="mainContact">
      <MainHeader />
      <Searchbar />

      <div className="m">
        <div className="Contacts">
          <ul className="ullist">
            {contacts.map((c) => {
              return (
                <button className = "btn" onClick = {() => tochat(c.conversation) }>
                  <li className="list">
                    <img
                      id="photo1"
                      src={require("../images/profiles/" + c.name + ".png")}
                      alt="Logo"
                    />
                    <div className="nameMess">
                      <span className="name">{c.name.toUpperCase()}</span>
                      
                    </div>

                    <span className="creat">{c.createdAt}</span>
                  </li>
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
