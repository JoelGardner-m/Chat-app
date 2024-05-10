const express = require('express');
const Cors = require('cors')
const path = require('path')
const  { 
  readOneDocument, 
  readAllDocuments, 
  checkIfUserExists, 
  insertOneDocument, 
  updateOneDocument, 
  deleteOneDocument,  
  addToArray,
  removeFromArray,
  removeItemFromArray,
  updateInArray
}= require('./Particpants-DBRequest');

const app = express()
const port = 5000

app.use(Cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Chat-App/dist'))
/*
const Account = {

  'C.A_ID':""
  'email':""
  'userName':""
  'password':""
  'profileConfig':{
      'profileFindablity': Boolean
      'SearchBy': ways that people can find you{ interest, hobby, profision}
      backgroundColor: ""
      profilePicture:""
      contacts:[]
      conversations: [
          conversationID #C.A_ID(person 1)#C.A_ID(person 2): {
              messages:[
                  messgae:{name messag,date:'9/20/2024',time:'12:30pm'e},

              ]
          
          }

      ] 
      }
  



}

*/


const Account = {
    email:"",
    username:"",
    password:"",
    contactRequest:[],
    notification:[{message:"welcome to Chat App. A place to meet new people or find a business patner all in one app."}],
    contacts:[],
    profileConfig:{
        profileFindablity: true,
        SearchBy: {interest:{}, hobby:{}, profession:{}},
        backgroundColor: "white",
        profilePicture:"https://via.placeholder.com/50x50",
        bio:'',

      }
    



  }



app.get('/', (req, res)=>{
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)
 
})

app.get('/login', (req, res)=>{
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)
  
})

app.post('/checkCreditials', async (req,res)=>{
  const info = req.body;
  const {Email, username, password} = req.body;
  const User_existence =  await checkIfUserExists(username)
  
  if (User_existence.Exist ){
    const userID = String(User_existence.ID._id)

    return res.status(200).redirect(`/profile/${userID}`)
  }

  return res.status(404).json({message: 'User dose not exist'})

})

app.post('/CreateAccount', async (req, res)=>{
  const info = req.body;
  const {Email, username, password} = req.body;
  const User_existence =  await checkIfUserExists(username)
  
  if (!User_existence.Exist){
    
    if (username != null){
      const userNUm = await insertOneDocument({...Account, email: Email, username: username, password:password})
      const userID = String(userNUm)
      return res.redirect(`/profile/${userID}`)
    }
  }
  return res.status(200).json({success:false, message: "Account has already been made"});
    
  
})

app.get('/signup', (req, res) => { 
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)

})


app.get('/profile/:id', (req, res) => {
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)

})

app.get('/profile/:id/notifications', async (req, res)=>{
  const {id} = req.params
  const userNotification = await readOneDocument(id)
  console.log('notes', userNotification.notification)
  res.json({notification: userNotification.notification})

})

app.get('/user/profileSetting/:id', async (req, res)=>{
  const {id} = req.params
  //console.log(id)
  const userSetting = await readOneDocument(id)
  
  return res.json({userSetting: userSetting})

})

app.patch('api/updateSettings/:id', async (req, res)=>{
  const {id} = req.params
  //console.log(id)
  //const userSetting = await readOneDocument(id)
  //return res.json({userSetting: userSetting})

})

app.get('/profile/:id/Explore', (req,res)=>{
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)
})

app.post('/requestContact', async (req, res) => {
  const {senderID, recieverID } = req.body
  
  
  const readrecieverID = await readOneDocument(recieverID)
  console.log('requested already')
  if (readrecieverID.contactRequest.includes(senderID)){
    
    return res.status(200).json({messgaes: "Connect to contact has already been requested"})
  }
  console.log('made request')
  const sendersUsername = await readOneDocument(senderID)
  addToArray(recieverID, 'notification', { message: `${sendersUsername.username} has just added you. you should add them back.`, senderID: senderID})
  addToArray(recieverID, 'contactRequest', senderID)
  
  return res.status(200).json({messgaes: "Connect to contact has been requested"})
})

app.post('/acceptContactRequest', async (req, res)=>{
  const {senderID, accepter, index} = req.body;
  console.log('request accepted')
  
  const readAccepter = await readOneDocument(accepter)
  const readSenderID = await readOneDocument(senderID)
  console.log(readAccepter.notification)
  const newNotification = readAccepter.notification
  newNotification.splice(index, 1)
  await updateOneDocument(accepter, {[`notification`]:[...newNotification]}, )
  //await removeItemFromArray(accepter, `contactRequest`, index)

  if (readAccepter.contacts.includes(senderID)){
    console.log("updated")
    return res.status(200).json({messgaes: "This person has already been added"})
  }
  
  const conversation = await insertOneDocument({particapants: [senderID, accepter], messages:[]}, `conversations`)

  await updateOneDocument( `${accepter}`, { [`contacts`]: [...readAccepter.contacts, {username: readSenderID.username, userID:senderID, conversationID: `${conversation}`}] } )
  await updateOneDocument( `${senderID}`, { [`contacts`]: [...readSenderID.contacts, {username: readAccepter.username, userID:accepter, conversationID: `${conversation}`}] } )
  console.log("contact added", conversation._id)

  await updateOneDocument( `${conversation}`, {particapants: [senderID, accepter], messages:[]}, `conversations` )
  
  return res.status(200).json({messgaes: "Contact added"})

})

app.delete('/declineRequest', async(req ,res) => {
  const {decliner, index} = req.body
  
  removeItemFromArray(decliner, 'notification', index)
  removeItemFromArray(decliner, 'contactRequest', index)
  return res.json({message: 'you have declined message'})
})

app.post('/conversations/:conversationsID', async (req, res)=>{
  const {conversationsID} = req.params
  const conversations = await readOneDocument(conversationsID, 'conversations');
  console.log(conversations.messages)
  
  return res.json({messages: conversations.messages})
  

  //return res.json({conversations: userConversations.profileConfig.conversations})



}

)


app.post('/:conervationID/addMessage', async (req, res)=>{
  const {senderID, converstion_id, message} = req.body
  console.log('this is sender '+ message)
  const readconverstionID = await readOneDocument(converstion_id, 'conversations')
  //readsenderID.profileConfig.conversations[`${converstion_id}`].messages.push({senderID: senderID, message: message})
    
  await updateOneDocument( converstion_id , {['messages']: [...readconverstionID.messages, {senderID: senderID, message: message} ]} , 'conversations')
  console.log(readconverstionID.messages)
  res.json("message sent")
 

  

}

)



app.get('/Explore/catgoty:', (req,res)=>{

})

const extractuserinfo = (users)=>{
  let extracted_data = [];
  
  users.forEach(user => {

    let userinfo = {
      userid: user._id,
      profileimage: user.profileimage,
      username: user.username,
      bio: user.profileConfig.bio

    }
    
    extracted_data.push(userinfo)

  })
  
  return extracted_data
}

app.get('/users', async (req, res)=>{
  
  const all_user = await readAllDocuments()
  
  
  if (all_user != null){
    const extracted  = extractuserinfo(all_user)
  return res.status(200).json({All_user: extracted  })
  }
  return res.status(404)

})

app.get('/v1/:userID/userinfo', async (req, res) => {
  const { userID } = req.params
  const userData = await readOneDocument(userID)
  
  console.log(userData)
  res.json(userData)
});



app.delete('/requestContact', async(req, res)=>{




})



app.listen(port, console.log(`active port on ${port}`));