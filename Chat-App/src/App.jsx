import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing_page from './Landing_page'
import Login_page from './login_page'
import Welcome_page from './Welcome_page'
import Find_contacts_page from './find_contact_page'
import Profile_page from './Profile Page/Profile_page'
import Store_page from './Store Page/store'
import axios from 'axios';
/*
Landing_page 
 Login_page 
 Welcome_page 
 Find_contacts 
 Profile 
 Store 
*/
const routes = {
  '/': Landing_page,
  '/login': Login_page,
  '/welcome': Welcome_page,
  '/find-contacts': Find_contacts_page,
  '/profile': Profile_page,
  '/store': Store_page,
};

function App() {
  
  
  
  const path = window.location.pathname;

  const Component = routes[path] || NotFound;

  return (
    <Router>
      <div>
        <Component/>
      </div>
    </Router>
  );
  
}

export default App
