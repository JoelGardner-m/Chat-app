import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
  
  '/login': Login_page,
  '/welcome': Welcome_page,
  '/find-contacts': Find_contacts_page,
  '/profile_page': Profile_page,
  '/store_page': Store_page,
  
};



function App() {
  const routeName = [
 
    '/login',
    '/welcome',
    '/find-contacts',
    '/profile_page',
    '/store_page',
  ];
  
  const routeComps = [ 
    Login_page,
    Welcome_page,
    Find_contacts_page,
    Profile_page,
    Store_page,
  ];
  const Routecomp = routeName.map( (route, i) => <Route key={i} path={route} Component={routeComps[i]}/>)  
  const path = window.location.pathname;
  
  
  const NotFound= ()=>{

    return(<p>NotFound</p>)
  }
  const Component = routes[path] || NotFound
  
  
  
  
  
  {Routecomp}
  console.log('bob' )
  return (
    <Router  >
      <Routes>
      <Route path='/' Component={Login_page}/>
      
      
      
      
      </Routes>
     
    </Router>
  );
  
}

export default App
