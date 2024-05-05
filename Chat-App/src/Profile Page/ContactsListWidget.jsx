import Card from "./message-Cards";
import React, { useEffect, useState } from 'react';

export function ContactsListWidget(props) {
  const message_widget = props.message_widget;
  const userID = props.userID;
  const viewportHeight = window.innerHeight;
  const contacts = [];
  
  

  function filterBy() {
    const serachby = document.getElementById("sort_contact_list") != null ? document.getElementById("sort_contact_list").value : "";
    return serachby;
  }

  
  
  function change() {
    //const searchText = filterBy().toLowerCase();
    //setContacts(contacts => props.contacts.filter(conversation => conversation.username.toLowerCase().startsWith(searchText)))
    
  }

  const allContacts = contacts? contacts.map((contact, i) => <Card key={i} name={contact.username} converstion_id={contact.userID} messages={message_widget('conversation')} backgroundColor="#ffffff" Color='#000000' latestTextMessage={contact.message}>

  </Card>):"no contacts"
  

  return (
    <>

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


    </>
  );

}
