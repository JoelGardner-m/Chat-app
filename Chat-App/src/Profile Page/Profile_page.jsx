import image from "../assets/logo 1.png"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ContactsListWidget } from "./ContactsListWidget";
import { SettingWidget } from "./SettingWidget";
import { NotificationWidget } from "./NotificationWidget";
import { CoversationWidget } from "./CoversationWidget";
import Card from "./message-Cards";
function Explore(){
  fetch('/Explore')
      .then(res=> window.location.href += '/Explore')
  }
function ProfileinfoWidget(props){
  const userID = useParams('id').id
  const viewportHeight = props.viewportHeight;
  const changePage = props.changePage;
  const background = props.background;
  const CurrentConversion = props.CurrentConversion
  const bio = props.bio;
  const profilepicture = props.profilepicture;
  const [contacts, setContacts] = useState([]);
  
  


  useEffect(() => {
    async function fetchContacts() {
      return await fetch(`/api/v1/${userID}/userinfo`)
        .then(res => res.json())
        .then(data => setContacts(data.contacts))
      
    }
    fetchContacts()
  }, [])
  
  
  const allContacts = contacts.map((contact, i) =>  
  <Card key={i} 
        name={contact.username} 
        UserID={userID} 
        personContactingID={`${contact.userID}`} 
        converstion_id={contact.conversationID} 
        setCurrentConversation={CurrentConversion}
        change_page={(nextPage)=> changePage(nextPage)}  messages={[]} backgroundColor="#ffffff" Color='#000000'/> )
  



  return (<> <div style={{ display: 'flex', width: '100%', height: viewportHeight, textAlign: 'center' }}>
            <div style={ {width: '20%', backgroundColor:'#20ffff', boxShadow:'5px 0px 10px hsl(200,30%,60%)', height: viewportHeight} }>
            
            <div style={{ display: 'inline-block', backgroundColor: '#20ffff', width: '100%', height: viewportHeight, boxShadow: '5px 0px 10px hsl(200,30%,60%)' }}>

              <div style={{ height: viewportHeight, overflow: 'auto' }}>
                <br />
                <div action="" method="get" style={{ textAlign: 'center' }}>

                  <input id="sort_contact_list" type="text" onChange={() => {}} placeholder="search contact list" />

                </div>
                <br />

                {allContacts}


              </div>

            </div>


  



              </div>
              <div style={ {  display: 'flex', alignItems : 'flex-start', backgroundColor:`${background}`, width:'80%', height:viewportHeight, textAlign:'center' } }>
                  <div>
                    <div name='settings' onClick={()=> changePage('setting')}style={ { backgroundColor:'yellow', height:60, width:60,marginLeft:20, marginTop:20, borderRadius:10 } }></div>
                    <div name='store' onClick={()=> changePage('notification')} style={ { backgroundColor:'#ffffff', height:60, width:60,marginLeft:20, marginTop:20   } }></div>
                    <div name='Explore' onClick={()=>Explore()} style={ { backgroundColor:'#704f80', height:60, width:60,marginLeft:20, marginTop:20   } }></div>
                    
                    </div>  
                    
                  <div style={{width: '40%'}}>

                    <div name='profile picture' style={ { backgroundColor:'#ffffff', height:viewportHeight/2, width:'150%', marginLeft:'25%', marginRight:'25%' } }>
                        <img src={profilepicture} alt="" width={200} style={{borderRadius:100, marginTop:'30px'}}/>

                    </div>
                    
                    <div name='profile bio'style={ { backgroundColor:'#ffffff', height:viewportHeight/2, width:'135%', marginLeft:'33%', marginRight:'25%' } }>
                      {bio}
                    </div>
                
                </div>
            </div>
            </div>
            </>
  )
    

  
}

function Profile(){
    const viewportHeight = window.innerHeight;
    const {id} = useParams();
    const [userinfo, setUserInfo] = useState(null);
    const [load, setload] = useState(false);
    const [widget, setWidget] = useState('profile');
    const [currentwidget, setCurrentWidget] = useState(<ProfileinfoWidget viewportHeight={viewportHeight}/>);
    const userID = useParams('id').id
    
    const [currentConversion, setCurrentConversion] = useState('');
    const [profileSetting, setProfileSetting] = useState({})
    
    useEffect(() => {
      async function fetchPS(){
      return await fetch(`/api/v1/${userID}/userinfo`)
            .then(res=> res.json())
            .then(data=> {
              
              
              setUserInfo(data)
              setload(true)})
            
      } 
      fetchPS()
      
    }, [])


    useEffect(() => {
      async function fetchPS(){
      return await fetch(`/api/user/profileSetting/${userID}`)
            .then(res=> res.json())
            .then(data=> setProfileSetting(data))
            
      } 
      fetchPS()
      
    }, [])

    function change_widget(widget){
      setWidget(widget)

    }
    
    useEffect(() => {
      if (userinfo != null ){
      switch(widget){
        case 'profile':
          setCurrentWidget(<ProfileinfoWidget background={userinfo.background} bio={userinfo.profileConfig.bio} profilepicture={userinfo.profileConfig.profilepicture} contacts={userinfo.profileConfig.contacts} viewportHeight={viewportHeight} changePage={setWidget} CurrentConversion={setCurrentConversion}/>)
          
          break;

        case 'conversation':
          setCurrentWidget(<CoversationWidget conversionID={currentConversion} viewportHeight={viewportHeight} profilepage={setWidget}/>)
        break;
        
        case 'setting':
          setCurrentWidget(< SettingWidget viewportHeight={viewportHeight} userID={userID} profilepage={setWidget}/>)
        break;

        case 'notification':
          setCurrentWidget(< NotificationWidget viewportHeight={viewportHeight} profilepage={setWidget} userID={userID}/>)
          break;
      }}

    }, [widget, userinfo, viewportHeight ])
    
    
    function contactmessgae(contact_id){
        console.log(contact_id)
        setWidget('conversation')

    }
    
  
  return (
    <>
      {load ? 
        <div style={ {display: 'flex', flexDirection: 'row', height: '100vh', width:'100%' } }>

          <div style={ {flexGrow: 1, width: '80%', height: viewportHeight } }>
            {currentwidget}
          </div>
        </div>
        :
        null
      }
    </>
  )
          
       



    


}


export default Profile