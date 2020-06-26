import React from 'react';
import Inbox from './components/inbox';
import Contacts from './components/contacts';
import './App.css'

const chatProject = () => {
  return (
    <div className = "container">
        <Contacts />
        <Inbox />
    </div>
  );
}

export default chatProject;
