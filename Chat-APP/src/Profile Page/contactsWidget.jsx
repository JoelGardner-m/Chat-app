import Card from "./message-Cards";




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
      

    const allContacts = contact.map( contact => <Card key={contact.name} name = {contact.name} backgroundColor="#ffffff" Color='#000000' lastestTextMessage="bob" latestTextMessage= {contact.message} >

    </Card> )
    
    return (
        <>
    
        <div style={ {display: 'inline-block', backgroundColor:'#20ffff', width:'20%', height:viewportHeight } }>

                <div style={ {height:viewportHeight, overflow: 'auto'} }>
                <br />
                {allContacts}
                    
                    
                </div> 

        </div>
        

        </>


    )




}


export default ContactsWidget