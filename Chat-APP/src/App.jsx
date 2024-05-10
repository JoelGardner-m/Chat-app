import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing_page from './Landing_page'
import Login_page from './login_page'
import Welcome_page from './Welcome_page'
import Find_contacts_page from './find_contact_page'
import Profile_page from './Profile Page/Profile_page'
import Store_page from './Store Page/store'


function NotFound (){
  return(<p>page not found 404</p>)


}

function App() {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Get the current pathname from window.location
  const pathname = window.location.pathname;

  // Define your page components
  const LandingPage = () => <Landing_page/>;
  const LoginPage = () => <Login_page/>;
  const WelcomePage = () =><Welcome_page/>
  const FindContacts = () => <Find_contacts_page/>;
  const Profile = () => <Profile_page/>;
  const Store = () => <Store_page/>;
  const NotFound = () => <div>404 - Not Found</div>;

  // Function to render the appropriate component based on the pathname
  const renderPage = () => {
    switch (pathname) {
      case '/':
        return <LandingPage />;
      case '/login_page':
        return <LoginPage />;
      case '/welcome_page':
        return <WelcomePage />;
      case '/find_contacts':
        return <FindContacts />;
      case '/profile':
        return <Profile />;
      case '/store':
        return <Store />;
      default:
        return <NotFound />;
    }
  };

  return <div>{renderPage()}</div>;
  
  
  
}

export default App
