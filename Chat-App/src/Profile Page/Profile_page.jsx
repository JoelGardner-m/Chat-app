import Card from "./message-Cards";
import image from "../assets/logo 1.png"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function ContactsListWidget(props){
    const message_widget = props.message_widget 
    const viewportHeight = window.innerHeight;
    
    const contact = props.contact
      
    function filterBy() {
        const serachby = document.getElementById("sort_contact_list") != null ? document.getElementById("sort_contact_list").value : ""
        return serachby
    }
    
    const [sortconvo, setsortconvo] = useState(contact)
    
    function change(){
      setsortconvo(filterBy === null ? contact : contact.filter(conversation => conversation.name.toLowerCase().startsWith(filterBy().toLowerCase())))

    }
    
    const allContacts = sortconvo.map( (contact, i) => <Card key={i} name = {contact.name} converstion_id={contact.id} messages={message_widget} backgroundColor="#ffffff" Color='#000000'  latestTextMessage= {contact.message}  >

    </Card> )
    
    return (
        <>
    
        <div  style={ {display: 'inline-block', backgroundColor:'#20ffff', width:'20%', height:viewportHeight, boxShadow:'5px 0px 10px hsl(200,30%,60%)' } }>
                
                <div style={ {height:viewportHeight, overflow: 'auto'} }>
                <br />
                <div action="" method="get" style={{textAlign:'center'}}>
                
                  <input id="sort_contact_list" type="text" onChange={()=>change()}  placeholder="search contact list"/>
                  
                </div>
                <br />
                
                {allContacts}
                    
                    
                </div> 

        </div>
        

        </>
    )
    
}



function SettingWidget(props){
  const backtoprofile_page = props.profilepage
  
  
  
  return(<>
    <div>
      <button style={ {borderRadius:50, backgroundColor:'#469846'} } onClick={ ()=> backtoprofile_page('profile')}> <img src='' alt="ProfilePage" /> </button>
          <div style={{background:'white', borderRadius:50, padding:20, marginLeft:50,  display:'flex', justifyContent:'center', justifyItems:'center'}}>
                
            <form action="/api/updateSettings" method="post">
            
                <label htmlFor="profilePicture">Profile Picture:</label>
                <input style={{ marginLeft: 5, marginBottom: 10 }} type="file" name="profilePicture" id="profilePicture" />
                    <br/>
                <label htmlFor="status">status:</label>
                <input style={{ marginLeft: 5, marginBottom: 10 }} type="checkbox" name="status" id="status" />
                    <br/>
                <label htmlFor="username">username:</label>
                <input style={{ marginLeft: 5, marginBottom: 10 }} type="text" name="username" id="username" />
                    <br/>
                <label htmlFor="email">email:</label>
                <input style={{ marginLeft: 5, marginBottom: 10 }} type="text" name="email" id="email" />
                    <br/>
                <label htmlFor="password">password:</label>
                <input style={{ marginLeft: 5, marginBottom: 10 }} type="text" name="password" id="password" />
                    <br/>
                <label htmlFor="bio">bio:</label>
                <textarea style={{ marginLeft: 5, marginBottom: 10, height:100, width:300, textAlign:'start', resize:'none'}}  name="bio" id="bio" />
                    <br/>

                <label  htmlFor="findablity">Findability:</label>
                <input style={{ marginLeft: 5, marginBottom: 20 }} type="checkbox" name="findablity" id="findablity" />
                    <br/>
                <label htmlFor="interest">Interest:</label>
                <input style={{ marginLeft: 5, marginBottom: 5 }} type="text" name="interest" id="interest" />
                    <br/>
                <label htmlFor="hobby">Hobby:</label>
                <input style={{ marginLeft: 5, marginBottom: 5 }} type="text" name="hobby" id="hobby" />
                    <br/>
                <label htmlFor="profession">Profession:</label>
                <input style={{ marginLeft: 5, marginBottom: 20 }} type="text" name="profession" id="profession" />
                    <br/>
                <label htmlFor="backgroundColor">Background Color:</label>
                <input style={{ marginLeft: 5, marginBottom: 20 }} type="color" name="backgroundColor" id="backgroundColor" />
                    <br/>
            
              <button type="submit">submit</button>

            </form>
            

            
            </div>    



    </div>

  </>


)
}

function NotificationWidget(props){
  const backtoprofile_page = props.profilepage
  const notifications = props.notifications;
  console.log(notifications.messages)
  function addcontact(senderID){
    //fetch('/api/addcontact/contact')


  }
  function declineContact(){
    //fetch()

  }
  function NoteCard(senderID){
      const notification = props.notification
    
      return (
      <>
      <div  style={{ color:'black', display:'flex', alignItems:'flex-start'}}>
        <img src="" alt="" />
        <p>
          {notification.message}
        </p>
        <div onClick={()=>{addfriend(notification.senderID) }}style={{backgroundColor:'green', width:40, height:30}}></div>
        
        <div onClick={()=>{declineContact(notification.senderID) }}style={{backgroundColor:'red', width:40, height:30, marginTop:30}}></div>

      </div>
      
      
      
      </>)

  }


  const displayNotification = notifications.map((notification, i) => <NoteCard key={i} notification={notification}/> )
  
  console.log(notifications)
  return(<>
    <div>
      <button style={ {borderRadius:50, backgroundColor:'#469846'} } onClick={ ()=> backtoprofile_page('profile')}> <img src='' alt="ProfilePage" /> </button>
          <div style={{background:'white', borderRadius:50, padding:20, marginLeft:50,  display:'flex', justifyContent:'center', justifyItems:'center'}}>
                {displayNotification}
            
            

            
            </div>    



    </div>

  </>


)
}


function Explore(){
  fetch('/Explore')
      .then(res=> window.location.href += '/Explore')
  }
function ProfileinfoWidget(props){
  const viewportHeight = props.viewportHeight;
  const changePage = props.changePage;
  const background = props.background;
  const bio = props.bio;
  const profilepicture = props.profilepicture;

  return (<>
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
            </>
  )
    

  
}

function CoversationWidget(props){
    const viewportHeight = props.viewportHeight;
    const backtoprofile_page = props.profilepage
    const username = props.username
 
    
    const messages = props.conversations;
    const latestMessage = messages[messages.length-1]
    const conserstion_display = messages.map( (messenger, i) => <li key={i} style={{ listStyleType: 'none', textAlign: messenger.name === username ? 'right' :'left', width:400, position:'relative', left: messenger.name === username ? '52%' : 0, right: messenger.name === username ? 0 : 90 , margin: '0px 40px 0px 40px' }}> 
                                                              <div>
                                                                <p style={{marginBottom:0, position:'relative', left: messenger.name === username ? '' : 30, right: messenger.name === username ? 30 : ''}}>{messenger.name}</p>
                                                                 <br/> 
                                                                <p style={{borderRadius: 50, padding: 15,marginTop:0,textAlign:messenger.name === username ? '' :'left', backgroundColor: messenger.name === username ? '#601040' : '#122890', color:'#ffffff'}} >{messenger.message}</p>
                                                                <p style={{marginBottom:0, position:'relative', left: messenger.name === username ? '' : 15, right: messenger.name === username ? 15 : ''}}>{messenger.date+"     "}{" "+messenger.time}</p>
                                                              </div>
                                                            </li>)
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(100+(value.length)*20)

    };
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // Handle Enter key press (e.g., submit form)
        console.log('Enter key pressed');
        const message = document.getElementById('message').textContent 
        if (message != ''){
            fetch('/api/user/convo/addMessage ', {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'

              },
              body: JSON.stringify({
                  key:{}

              })
            })

        }
      }
    };
    
    return (
        <>
        <div style={ { alignItems : 'flex-start', backgroundColor:'#40809039', width:'80%', height:viewportHeight } }>
            <button style={ {borderRadius:50, backgroundColor:'#469846'} } onClick={ ()=> backtoprofile_page('profile')}> <img src='' alt="ProfilePage" /> </button>
            <div style={ {height:viewportHeight, overflow: 'auto'} }>
                <br />
                <ul>
                {conserstion_display}   
                </ul>
                
                <div style={{position:'fixed', height: viewportHeight-50, left:450}}>
                  <form id='message' action="" method="post">
                  <textarea 
                    className="input"
                    placeholder="Chat App"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    style={{ borderRadius:20, minheight: 200, height:`${(value.length/10000)*20}px`, resize: 'none',  paddingLeft:`10px`, paddingBottom:`20px`, paddingTop:`10px`, width:500, fontSize:15 }}
                    
                    ></textarea>
                    </form>
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

    useEffect(()=>{
      if (userinfo != null ){
      switch(widget){
        case 'profile':
          setCurrentWidget(<ProfileinfoWidget background={userinfo.background} bio={userinfo.profileConfig.bio} profilepicture={userinfo.profileConfig.rofilepicture} viewportHeight={viewportHeight} changePage={setWidget}/>)
          break;

        case 'conversation':
          setCurrentWidget(<CoversationWidget username={userinfo.username} viewportHeight={viewportHeight} profilepage={setWidget}/>)
        break;
        
        case 'setting':
          setCurrentWidget(< SettingWidget viewportHeight={viewportHeight} userID={userID} profilepage={setWidget}/>)
        break;

        case 'notification':
          setCurrentWidget(< NotificationWidget viewportHeight={viewportHeight} notifications={userinfo.notification} profilepage={setWidget}/>)
          break;
      }}

    }, [widget, userinfo ])
    
    
    function contactmessgae(contact_id){
        console.log(contact_id)
        setWidget('conversation')

    }
    
  console.log()
  return  userinfo == null ? 
              (<p>loading</p>):
             (
              <div style={ {display: 'flex', alignItems : 'flex-start', height:viewportHeight }}> 
              <ContactsListWidget contact={userinfo.profileConfig.contacts} message_widget={contactmessgae}></ContactsListWidget>
              {currentwidget}
              
              </div> 
             )
             //
          
       



    


}


export default Profile