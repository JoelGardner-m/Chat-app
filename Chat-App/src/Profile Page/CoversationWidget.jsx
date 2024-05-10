import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




export function CoversationWidget(props) {
  const viewportHeight = props.viewportHeight;
  const backtoprofile_page = props.profilepage;
  const userID = useParams('id').id;
  
  const converstion_id = props.conversionID;
  const [latestTextMessage, SetlatestTextMessage] = useState('');
  const [messages, setMessages] = useState([]);

  function checkforlatesttext() {
    useEffect(() => {
      const interval = setInterval(() => {
        axios.post(`/api/conversations/${converstion_id}`, {
          converstion_id: converstion_id
        })
        .then(res => {
          const conversation = res.data.messages
          console.log(conversation)
          conversation.length !== 0 ? SetlatestTextMessage( pre => pre === conversation[conversation.length-1].message ? pre : conversation[conversation.length-1].message): null
        })
        .catch(err => {
          console.log(err);
        });
      }, 1000);
      return () => clearInterval(interval);
    }, [converstion_id, userID]);
  
  }
 
  


  useEffect(() => {
    async function fetchConversion (){
      return await fetch(`/api/conversations/${converstion_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify({
          converstion_id: converstion_id
        })

      })
      .then(res => res.json())
      .then(data => setMessages(data.messages
        ))


    }
    fetchConversion()


  }, [latestTextMessage, checkforlatesttext()])

  
  



  
  const conversation_display = messages.length !== 0 ? messages.map((messenger, i) => (
    <li key={i} style={{ 
      listStyleType: 'none', 
      textAlign: messenger.senderID === userID ? 'right' : 'left', 
      width: 400, 
      position: 'relative', 
      left: messenger.senderID === userID ? '52%' : 0, 
      right: messenger.senderID === userID ? 0 : 90, 
      margin: '0px 40px 0px 40px' 
    }}>
      <div>
        <p style={{ 
          marginBottom: 0, 
          position: 'relative', 
          left: messenger.senderID === userID ? '' : 30, 
          right: messenger.senderID === userID ? 30 : '' 
        }}>{messenger.username}</p>
        <br />
        <p style={{ 
          borderRadius: 50, 
          padding: 15, 
          marginTop: 0, 
          textAlign: messenger.senderID === userID ? '' : 'left', 
          backgroundColor: messenger.senderID === userID ? '#601040' : '#122890', 
          color: '#ffffff' 
        }}>{messenger.message}</p>
        <p style={{ 
          marginBottom: 0, 
          position: 'relative', 
          left: messenger.senderID === userID ? '' : 15, 
          right: messenger.senderID === userID ? 15 : '' 
        }}>{messenger.date + " date    "}{"time " + messenger.time}</p>
      </div>
    </li>
  )) : null;

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(100 + (value.length) * 20);

  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Handle Enter key press (e.g., submit form)
      console.log('Enter key pressed');
      const message = document.getElementById('message').textContent;
      if (message != '') {
        
        
        
        fetch(`/api/${converstion_id}/addMessage` , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({

            senderID: userID,
            converstion_id: converstion_id,
            message: value,
          })
        });
        setValue('')
      }
    }
  };
//
  return (
    <>
      <div style={{ alignItems: 'flex', backgroundColor: 'blue', width: '100%', height: viewportHeight }}>
        
        <button style={{ borderRadius: 50, backgroundColor: '#469846' }} onClick={() => backtoprofile_page('profile')}> <img src='' alt="ProfilePage" /> </button>
        
        <div style={{ height: viewportHeight, overflow: 'auto' }}>
          
          <br />
          
          <ul>
            {conversation_display}
          </ul>

          <div style={{ position: 'fixed', height: '100vh' , left: '5vh', top: '94vh' , width: `100%` }}>
          <form id='message' action='' method="post">
    
    
          <textarea
            className="input"
            placeholder="Chat App"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ borderRadius: 20, minheight: 200, height: `${(value.length / 10000) * 20}px`, resize: 'none', paddingLeft: `10px`, paddingBottom: `20px`, paddingTop: `10px`, width: '80%', fontSize: 15 }}

          ></textarea>
          
        </form>
          </div>
        </div>




      </div>
    </>
  );



}
