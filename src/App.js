import React from 'react';
import './App.css';
import Chatproject from './chatProject'
import {Provider as ChatProvider} from './context/chatContext'

const App = () => {
  return (
    <>
      <Chatproject />
    </>
  );
}

const APP = App
export default () =>{
  return (
    <ChatProvider>
    <APP />
  </ChatProvider>

  )
 

}
