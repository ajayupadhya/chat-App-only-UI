import React, { useContext } from "react";
import { Context } from "../context/chatContext";
import profile from "../images/profiles/ben.png";

const Chat = () => {
  const {
    state: { data, chats },
  } = useContext(Context);

  return (
    <div className="chats">
      {data.map((c, i) => {
        return (
          <div key={i}>
            {!c.isMyMessage ? (
              <div className="container1">
                <img
                  src={require("../images/profiles/" + c.name + ".png")}
                  alt="Avatar"
                />

                <p>{c.messageText}</p>
                <span className="time-right">{c.createdAt}</span>
              </div>
            ) : (
              <div className="container1 darker">
                <img src={profile} alt="Avatar" className="right" />
                <p>{c.messageText}</p>

                <span className="time-left"> {c.createdAt}</span>
              </div>
            )}
          </div>
        );
      })}
      {chats.length
        ? chats.map((e) => {
            return (
              <div className="container1 darker">
                <img src={profile} alt="Avatar" className="right" />
                <p>{e}</p>

                <span className="time-left"></span>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Chat;
