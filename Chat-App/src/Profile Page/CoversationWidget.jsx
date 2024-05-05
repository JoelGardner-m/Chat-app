import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function CoversationWidget(props) {
  const viewportHeight = props.viewportHeight;
  const backtoprofile_page = props.profilepage;
  const userID = useParams('id').id;
  const converstion_id = props.conversionID;
  const [messages, setMessages] = useState([]);

  
  console.log(converstion_id);
  useEffect(() => {
    async function fetchConversion (){
      return await fetch(`/api/profile/${userID}/conversations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify({
          converstion_id: converstion_id
        })

      })
      .then(res => res.json())
      .then(data => (data))


    }
    fetchConversion()


  }, [])


  




  const conserstion_display = messages.map((messenger, i) => <li key={i} style={{ listStyleType: 'none', textAlign: messenger.name === username ? 'right' : 'left', width: 400, position: 'relative', left: messenger.name === username ? '52%' : 0, right: messenger.name === username ? 0 : 90, margin: '0px 40px 0px 40px' }}>
    <div>
      <p style={{ marginBottom: 0, position: 'relative', left: messenger.name === username ? '' : 30, right: messenger.name === username ? 30 : '' }}>{messenger.name}</p>
      <br />
      <p style={{ borderRadius: 50, padding: 15, marginTop: 0, textAlign: messenger.name === username ? '' : 'left', backgroundColor: messenger.name === username ? '#601040' : '#122890', color: '#ffffff' }}>{messenger.message}</p>
      <p style={{ marginBottom: 0, position: 'relative', left: messenger.name === username ? '' : 15, right: messenger.name === username ? 15 : '' }}>{messenger.date + "     "}{" " + messenger.time}</p>
    </div>
  </li>);
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
        fetch('/api/user/convo/addMessage ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            key: {}
          })
        });

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
            {conserstion_display}
          </ul>

          <div style={{ position: 'fixed', height: '100vh' , left: '5vh', top: '94vh' , width: `100%` }}>
            <form id='message' action="" method="post">
              <textarea
                className="input"
                placeholder="Chat App"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={{ borderRadius: 20, minheight: 200, height: `${(value.length / 10000) * 20}px`, resize: 'none', paddingLeft: `10px`, paddingBottom: `20px`, paddingTop: `10px`, width: '90%', fontSize: 15 }}

              ></textarea>
            </form>
          </div>
        </div>




      </div>
    </>
  );



}
