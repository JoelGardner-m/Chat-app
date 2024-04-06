import Card from "./message-Cards";
import image from "../assets/logo 1.png"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'



function getUserInfo(userID){
    


    const userInfo = fetch(`api/v1/${userID}/userinfo`)
    .then(res=> res.json())
    .catch((error)=> console.error(error))
    console.log(userInfo)
    return userInfo
}



function findContact(search){
  
  
  return(<div>


  </div>)


}

function ContactsWidget(props){
    
    const viewportHeight = window.innerHeight;
    
    const contact = [
        {
          id: '_1',
          name: "John",
          message: "Hey there! How have you been? I just wanted to catch up and see what's new with you. Let's grab coffee sometime!"
        },
        {
          id: '_2',
          name: "Emma",
          message: "Hi! I hope you're doing well. I wanted to share this exciting news with you - I got a promotion at work! Let's celebrate soon!"
        },
        {
          id: '_3',
          name: "Michael",
          message: "Hey buddy! It's been a while since we last hung out. How about we plan a hiking trip this weekend? I heard there's a great trail nearby."
        },
        {
          id: '_4',
          name: "Sophia",
          message: "Hi! I came across this interesting article and thought of sharing it with you. It's about the latest trends in fashion. Check it out when you get a chance!"
        },
        {
          id: '_5',
          name: "Daniel",
          message: "Hey! Remember that project we were discussing last week? I've made some progress on it and would love to get your feedback. Let's chat about it soon!"
        },
        {
          id: '_6',
          name: "Alice",
          message: "Hi friend! I hope you're having a wonderful day. Just wanted to say hello and catch up with you. Let's plan something fun soon!"
        },
        {
          id: '_7',
          name: "Oliver",
          message: "Hey buddy! How's everything going? Let's grab lunch sometime this week and catch up on things."
        },
        {
          id: '_8',
          name: "Sophie",
          message: "Hi there! I stumbled upon this cool event happening in town. Let me know if you're interested in joining me!"
        },
        {
          id: '_9',
          name: "Max",
          message: "Hey! I hope you're doing well. Just wanted to check in and see how you're doing. Let's hang out soon!"
        },
        {
          id: '_10',
          name: "Liam",
          message: "Hi friend! I found this amazing new restaurant in the neighborhood. Let's try it out together sometime!"
        },
        {
          id: '_11',
          name: "Ella",
          message: "Hey there! I came across this interesting book recommendation and thought of sharing it with you. Let's discuss it over coffee!"
        },
        {
          id: '_12',
          name: "Sophie",
          message: "Hi friend! How about a movie night this weekend? I heard there's a great film playing at the theater."
        },
        {
          id: '_13',
          name: "Charlie",
          message: "Hey! Let's plan a game night with our friends. It's been a while since we all got together."
        },
        {
          id: '_14',
          name: "Isabella",
          message: "Hi there! I'm organizing a picnic in the park this Saturday. Would you like to join us?"
        },
        {
          id: '_15',
          name: "Jacob",
          message: "Hey buddy! Just wanted to remind you about the concert next week. Don't forget to get your ticket!"
        },
        {
          id: '_16',
          name: "Amelia",
          message: "Hi friend! I found this amazing new recipe and thought of trying it out together. Let me know if you're interested!"
        },
        {
          id: '_17',
          name: "William",
          message: "Hey! I'm planning a road trip next month. Would you like to join me? It'll be an adventure!"
        },
        {
          id: '_18',
          name: "Mia",
          message: "Hi there! I've been learning a new hobby lately. Let's meet up and I'll show you what I've been working on!"
        },
        {
          id: '_19',
          name: "James",
          message: "Hey buddy! I heard about this interesting workshop happening next week. Let's sign up and learn something new!"
        },
        {
          id: '_20',
          name: "Charlotte",
          message: "Hi friend! How about a weekend getaway to the countryside? It'll be refreshing and peaceful!"
        }
      ];
      

    const allContacts = contact.map( (contact, i) => <Card key={i} name = {contact.name} backgroundColor="#ffffff" Color='#000000' lastestTextMessage="bob" latestTextMessage= {contact.message} >

    </Card> )
    
    return (
        <>
    
        <div style={ {display: 'inline-block', backgroundColor:'#20ffff', width:'20%', height:viewportHeight, boxShadow:'5px 0px 10px hsl(200,30%,60%)' } }>

                <div style={ {height:viewportHeight, overflow: 'auto'} }>
                <br />
                {allContacts}
                    
                    
                </div> 

        </div>
        

        </>
    )

}


function ProfileinfoWidget(props){
    const viewportHeight = props.viewportHeight;
    
    return (
        <>
        <div style={ {  display: 'flex', alignItems : 'flex-start', backgroundColor:'#707070', width:'80%', height:viewportHeight, textAlign:'center' } }>
                      <div  >
                        <div name='settings'style={ { backgroundColor:'#ffff00', height:60, width:60,marginLeft:20, marginTop:20, borderRadius:10 } }></div>
                        <div name='store'style={ { backgroundColor:'#ffffff', height:60, width:60,marginLeft:20, marginTop:20   } }></div>
                    
                        </div>  
                        
                    <div style={{width: '40%'}}>

                        <div name='profile picture' style={ { backgroundColor:'#ffffff', height:viewportHeight/2, width:'150%', marginLeft:'25%', marginRight:'25%' } }>
                            <img src={image} alt="" width={200} style={{borderRadius:100, marginTop:'30px'}}/>

                        </div>
                        <div name='profile bio'style={ { backgroundColor:'#ffffff', height:viewportHeight/2, width:'135%', marginLeft:'33%', marginRight:'25%' } }>bio</div>
                    </div>
                </div>
                </>
    )
    

  
}


function messageLog(name, message){

    return {name:name, message:message}
}

function getconversation(coversaion_id){

    const conversation = [
        { name: 'Emily', message: 'Hey, have you ever been to Arizona? I\'m thinking about going there for a vacation.',date:'9/20/2024',time:'12:30pm' },
        { name: 'Alex', message: 'Hey Emily! Yes, I\'ve been there. Arizona is amazing! There are so many beautiful places to see.',date:'9/20/2024',time:'12:31pm' },
        { name: 'Emily', message: 'That\'s awesome! What are some must-visit sights, Alex?',date:'9/20/2024',time:'12:32pm' },
        { name: 'Alex', message: 'You have to visit the Grand Canyon, it\'s breathtaking! And don\'t miss Sedona for its red rock formations.',date:'9/20/2024',time:'12:34pm' },
        { name: 'Emily', message: 'Sounds incredible! Did you meet any interesting people there, Alex?',date:'9/20/2024',time:'12:35pm' },
        { name: 'Alex', message: 'Yes, I met some locals who shared fascinating stories about the history and culture of Arizona.',date:'9/20/2024',time:'12:36pm' },
        { name: 'Emily', message: 'That\'s so cool! Any memorable jokes or moments?',date:'9/20/2024',time:'12:37pm' },
        { name: 'Alex', message: 'Oh, I remember this one time when we were hiking and saw a roadrunner chasing a coyote. It felt like we were in a cartoon!',date:'9/20/2024',time:'12:38pm' },
        { name: 'Emily', message: 'Haha, that must have been hilarious! Where did you stay during your visit?',date:'9/20/2024',time:'12:40pm' },
        { name: 'Alex', message: 'We stayed at a cozy cabin near Flagstaff. The views of the starry sky at night were unforgettable.',date:'9/20/2024',time:'12:41pm' },
        { name: 'Emily', message: 'Sounds magical! How was your overall experience, Alex? Would you go again?',date:'9/20/2024',time:'12:45pm' },
        { name: 'Alex', message: 'Absolutely! Arizona has so much to offer. The landscapes, the people, the adventures – I\'d go back in a heartbeat.', date:'9/20/2024',time:'12:55pm' }
      ];
      return conversation
}

function CoversationWidget(props){
    const viewportHeight = props.viewportHeight;
    const username = 'Emily'
    const messages = getconversation()
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
        
            <div style={ {height:viewportHeight, overflow: 'auto'} }>
                <br />
                <ul>
                {conserstion_display}   
                </ul>
                
                <div style={{position:'fixed', top:viewportHeight-50, left:450}}>
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



function Profile(props){
    const viewportHeight = window.innerHeight;
    const profile_ID = props.profile_ID
    const {id} = useParams()
    const userinfo = getUserInfo(id)
    console.log(userinfo)
    
     return (
        <>
            <div style={ {display: 'flex', alignItems : 'flex-start', height:viewportHeight }}>
                
            <ContactsWidget ></ContactsWidget>
            <CoversationWidget viewportHeight={viewportHeight}/>

                
                

            </div>
        </>



    )


}


export default Profile