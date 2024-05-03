import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing_page from './Landing_page'
import Login_page from './login_page'
import Sign_in_page from './Sign_in';
import Welcome_page from './Welcome_page'
import Find_contacts_page from './find_contact_page'
import Profile_page from './Profile Page/Profile_page'
import Store_page from './Store Page/store'
import Explore_page from './Explore Page/Explore_page';
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
  '':Landing_page,
  '/':Landing_page,
  '/login': Login_page,
  '/signup': Sign_in_page,
  '/welcome': Welcome_page,
  '/find-contacts': Find_contacts_page,
  '/profile/': Profile_page,
  '/store_page': Store_page,
  '/Explore':Explore_page
  
};



function App() {
  function params (param){
    if (param == 'end'){
    const url = window.location.href;
    const parts = url.split('/');
    const lastParam = parts[parts.length - 1];
    const end = lastParam;

    return end
    }
    const url = window.location.href;
    const parts = url.split('/');
    const Param = parts[parts.length - param];
    const parm = Param;

    return parm 

  }
  

  const path = window.location.pathname;
  const NotFound= ()=>{

    return(<p>NotFound</p>)
  }
  const Component = routes[path] || NotFound

  
  function newComponent(){
    if (params(2) == 'profile'){
      return (<Router basename='/'>
      <Routes>
          <Route path='/profile/:id' Component={Profile_page} />

      </Routes>
      


    </Router>)
    }
    return (<Component/>)
  }
  //
  //<p>words</p>
  return (
    <>
    {newComponent()}
    </>
     
   
  );
  
}

export default App
