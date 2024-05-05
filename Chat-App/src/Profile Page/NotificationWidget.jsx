import React, { useState, useEffect } from 'react';




export function NotificationWidget(props) {
  const backtoprofile_page = props.profilepage;
  const userID = props.userID;
  const [notifications, setNotification] = useState([]);
  const [displayNotification, setDisplayNotification] = useState([]);

  useEffect(() => {
    function fetchNotifications() {
      fetch(`/api/profile/${userID}/notifications`)
        .then(res => res.json())
        .then(data => setNotification(data.notification));

    }

    fetchNotifications();
  }, []);
  
  function NoteCard(props) {
    const notification = props.notification;
  
    const index = props.index;
  
    return notification != null ? (
      <>
        <div style={{ backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'flex-start', padding: 20, borderRadius: 30, margin: 15 }}>
          <img src="" alt="" />
          <p>
            {notification.message}
          </p>
          <div onClick={() => { addcontact(index, notification.senderID); }} style={{ backgroundColor: 'green', width: 40, height: 30 }}></div>
  
          <div onClick={() => { declineContact(index, notification.senderID); }} style={{ backgroundColor: 'red', width: 40, height: 30, marginTop: 30 }}></div>
  
        </div>
  
  
  
  
      </>) : (<><p>loading</p><br /> </>);
  
  }

  useEffect(() => {
    const filterNotification = notifications
    .filter(notification => notification != null);
    setDisplayNotification(filterNotification.map((notification, i) => <NoteCard key={i} index={i} notification={notification} />));


  }, [notifications]);


  async function addcontact(index, senderID) {
    const accepter = userID;
    console.log(accepter);
    await fetch('/api/acceptContactRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ senderID: senderID, accepter: accepter, index: index })
    });


  }
  function declineContact(index) {
    const decliner = userID;
    const filteredNotifications = notifications.filter((_, i) => i !== index);
    setNotification(filteredNotifications);
    fetch('/api/declineRequest', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ decliner, index })
    });

  }


  return (<>
    <div>
      <button style={{ borderRadius: 50, backgroundColor: 'green' }} onClick={() => backtoprofile_page('profile')}> <img src='' alt="ProfilePage" /> </button>
      <div style={{ background: 'green', borderRadius: 50, padding: 20, marginLeft: 50, overflow: 'auto', height: 1080 }}>
        {displayNotification}




      </div>



    </div>

  </>


  );
}
