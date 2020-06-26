import React from "react";
import Chat from "./chat";
import Reply from "./reply";
import Header from "./header";
const Inbox = () => {
  const [getmess, setgetmess] = React.useState("ajau");

  return (
    <div className="inbox">
      <Header />
      <Chat />
      <Reply mess={getmess} get={(e) => setgetmess(e)} />
    </div>
  );
};
export default Inbox;
