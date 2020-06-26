import React, { useContext } from "react";
import { Context } from "../context/chatContext";
import save from "../images/search/send.png";

const Reply = () => {
  const {
    state: { message },
    sendReply,
    addMessage,
  } = useContext(Context);
  return (
    <div className="reply">
      <input
        className="reply-input"
        type="text"
        placeholder="Type a Message"
        value={message}
        onChange={(e) => addMessage(e.target.value)}
      />
      <button onClick={sendReply}>
        <img src={save} id="send" />
      </button>
    </div>
  );
};
export default Reply;
