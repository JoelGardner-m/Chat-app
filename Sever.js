const express = require('express');
const Cors = require('cors')
const path = require('path')
const { readOneDocument, readAllDocuments, checkIfUserExists, insertOneDocument, updateOneDocument, deleteOneDocument }= require('./Particpants-DBRequest');

const app = express()
const port = 5000

app.use(Cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/workspaces/Chat-app/Chat-App/dist'))
 
/*
Account{
    C.A_ID:""
    email:""
    userName:""
    password:""
    profileConfig:{
        profileFindablity: bool
        SearchBy: ways that people can find you{ interest, hobby, profision}
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
  const {Email,username,password} = req.body;
  const User_existence =  await checkIfUserExists('jake')
  const userID = String(User_existence.ID._id)
  
  if (User_existence.Exist ){
    
    return res.status(200).redirect(`/profile_page/${userID}`)
  }

  return res.status(404).json({message: 'User dose not exist'})

})

app.post('/CreateAccount', async (req, res)=>{
  const info = req.body;
  const {email,name,password} = req.body;
  const User_existence =  await checkIfUserExists(name)
  
  if (User_existence){
    return res.status(200).json({success:false, message: "Account has already been made"});
    
  }
  
  const userNUm = insertOneDocument({email: email, name: name, password:password})
  return res.redirect(`/profile/${userNUm}`)

})

app.get('/signup', (req, res) => { 
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)

})

app.post('/signin', async (req, res) => {
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)
    
});

app.get('/profile_page/:id', (req, res) => {
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)

})

app.get('/Explore_page/catgoty:', (req,res)=>{

})

app.get('/api/users', (req, res)=>{
  res.status(200).json({bob:'op', jim:'a'})


})

app.get('/api/v1/:userID/userinfo', async (req, res) => {
  const { userID } = req.params
  const userData = await readOneDocument(userID)
  
  console.log(userData)
  res.json(userData)
})


app.listen(port, console.log(`active port on ${port}`));