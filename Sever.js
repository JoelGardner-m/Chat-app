const express = require('express');
const Cors = require('cors')
const path = require('path')
const { readOneDocument, readAllDocuments, checkIfUserExists, insertOneDocument, updateOneDocument, deleteOneDocument }= require('./Particpants-DBRequest')
const app = express()
const port = 5000
app.use(Cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Chat-App/dist'))
 
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
app.get('*', (req, res)=>{
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)
  console.log(filepath)
})
/*
app.get('/profile_page', (req, res)=>{
  const filepath = path.join(__dirname, 'Chat-App/dist', 'index.html')
  res.sendFile(filepath)
  console.log(filepath)
})*/

app.get('/checkCreditials', async (req,res)=>{
  const info = req.body;
  const {email,name,password} = req.body;
  const User_existence =  await checkIfUserExists(name)
  
  if (User_existence ){
    return res.status(200).json({success:true, message: "Login in"});
    
  }
  return res.status(200).json({success:true, message, data:{}})

})

app.post('/CreateAccount', async (req, res)=>{
  const info = req.body;
  const {email,name,password} = req.body;
  const User_existence =  await checkIfUserExists(name)
  
  if (User_existence ){
    return res.status(200).json({success:false, message: "Account has already been made"});
    
  }
  //insertOneDocument()
  return res.status(200).json({success:true, message: "successfully created a new Account", data:{}})

} )


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/all', (req,res) =>{
  res.send('op')
  console.log(req)

})

app.get('/Explore_page/catgoty:', (req,res)=>{



})

app.get('/api', (req, res) => {
  res.send('accessing api')
})

app.get('/api/users', (req, res)=>{
  res.status(200).json({bob:'op', jim:'a'})


})

app.post('/signin', async (req, res) => {
  
    
});

app.patch('/:id',(req, res) => {
    res.send(`<p>success</p>`)

})

app.post('/api/v1/user',async (req, res) => {
  
  

  



})


app.listen(port, console.log(`active port on ${port}`));