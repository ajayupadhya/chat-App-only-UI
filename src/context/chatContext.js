import createContext from "./createContext";

const chatReducer = (state, action) => {
  switch (action.type) {
    case "to_chat":
      return { ...state, data: action.payload };
    case "addmessage":
      return { ...state, message: action.payload  };
    case "addChats":
      return { ...state, chats: [...state.chats, state.message], message: ""  };
    default:
      return state;
  }
};
const tochat = (dispatch) => {
  return (data) => {
    dispatch({ type: "to_chat", payload: data });
  };
};

const sendReply = (dispatch) => {
  return () => {
    dispatch({ type: "addChats" });
  };
};
const addMessage = (dispatch) => {
  return (data) => {
    dispatch({ type: "addmessage", payload: data });
  };
};

export const { Context, Provider } = createContext(
  chatReducer,
  { sendReply, addMessage, tochat },
  {
    message: "",
    chats: [],
    contacts: [
      {
        name: "daryl",
        imageUrl: "../images/profiles/daryl.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Oct 20",
        isMyMessage: true,
        conversation: [
        
          { name :'daryl',
            messageText: "Ok then",
            createdAt: "Apr 16",
            isMyMessage: true,
          },
          {
            name :'daryl',
            messageText: 
                       ` Yeah I think it's best we do that. Otherwise things won't work well at all. 
                        I'm adding more text here to test the sizing of the speech bubble and the 
                        wrapping of it too.`
                    ,
            createdAt: "Apr 16",
            isMyMessage: false,
          },
          {
            name :'daryl',
            messageText: "Maybe we can use Jim's studio.",
            createdAt: "Apr 15",
            isMyMessage: true,
          },
          {
            name :'daryl',
            messageText: `
                        All I know is where I live it's too hard
                        to record because of all the street noise.
                    `,
            createdAt: "Apr 15",
            isMyMessage: false,
          },
          {
            name :"daryl",
            messageText: `
                        Well we need to work out sometime soon where
                        we really want to record our video course.
                    `,
            createdAt: "Apr 15",
            isMyMessage: true,
          },
          {
            name :"daryl",
            messageText: `
                        I'm just in the process of finishing off the
                        last pieces of material for the course.
                    `,
            createdAt: "Apr 15",
            isMyMessage: false,
          },
          {
            name :"daryl",
            messageText: "How's it going?",
            createdAt: "Apr 13",
            isMyMessage: true,
          },
          {
            name :"daryl",
            messageText: " Hey mate what's up?",
            createdAt: "Apr 13",
            isMyMessage: false,
          },
          {
            name :"daryl",
            messageText: "Hey Daryl?",
            createdAt: "Apr 13",
            isMyMessage: true,
          },
        ],
      },

      {
        name: "douglas",
        imageUrl: "../images/profiles/douglas.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Feb 13",
        isMyMessage: true,
        conversation: [
          {
            name :'douglas',
            messageText: "How are you",
            createdAt: "Apr 13",
            isMyMessage: true,
          },
        ],
      },
      {
        name: "jacob",
        imageUrl: "../images/profiles/jacob.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Jun 16",
        isMyMessage: true,
        conversation: [
          {
            name :'jacob',
            messageText: "Hey Jacob how's going",
            createdAt: "Apr 13",
            isMyMessage: true,
          },
        ],
      },
      {
        name: "john",
        imageUrl: "../images/profiles/john.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Jun 17",
        isMyMessage: true,
        conversation: [
          {
            name : 'john',
            messageText: "How's it going?",
            createdAt: "Apr 13",
            isMyMessage: false,
          },
        ],
      },
      {
        name: "kim",
        imageUrl: "../images/profiles/kim.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Jun 17",
        isMyMessage: true,
        conversation: [
          {
            name :'kim',
            messageText: "Hey",
            createdAt: "Apr 13",
            isMyMessage: false,
          },
        ],
      },
      {
        name: "sarah",
        imageUrl: "../images/profiles/sarah.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Jun 17",
        isMyMessage: true,
        conversation: [
          {
            name :'sarah',
            messageText: "How's it going?",
            createdAt: "Apr 13",
            isMyMessage: false,
          },
        ],
      },
      {
        name: "stacey",
        imageUrl: "../images/profiles/stacey.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Jan 19",
        isMyMessage: true,
        conversation: [
          {
            name :'stacey',
            messageText: "How's it going?",
            createdAt: "Apr 13",
            isMyMessage: false,
          },
        ],
      },
      {
        name: "stan",
        imageUrl: "../images/profiles/stan.png",
        imageAlt: null,
        messageText: "Hii",
        createdAt: "Jun 26",
        isMyMessage: true,
        conversation: [
          {
            name : 'stan',
            messageText: "How's it going?",
            createdAt: "Apr 13",
            isMyMessage: false,
          },
        ],
      },
    ],
    data: [],
  }
);
