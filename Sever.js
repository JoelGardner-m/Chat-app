const express = require('express');
const Cors = require('cors')
const { readOneDocument, readAllDocuments, checkIfUserExists, insertOneDocument, updateOneDocument, deleteOneDocument }= require('./Particpants-DBRequest')
const app = express()
const port = 5000
app.use(Cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

/*
Account{
    C.A_ID:""
    email:""
    userName:""
    password:""
    profileConfig:{
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


app.get("/", (req, res)=>{
  res.send("helloe")

})

app.get('/api', (req, res) => {
  res.send('accessing api')
})

app.get('/api/users', (req, res)=>{
  res.status(200).json({bob:'op', jim:'a'})


})

app.post('/signin', async (req, res) => {
  const info = req.body;
  const {email,name} = req.body;
  const User_existence =  await checkIfUserExists(name)
  
  if (User_existence  ){
    return res.status(200).json({success:false, message: "username is already taken"});
    
  }
  return res.status(200).json({success:true, data:{}})
    
});

app.patch('/:id',(req, res) => {
    res.send(`<p>success</p>`)

})

app.post('/api/v1/user',async (req, res) => {
  
  

  



})


app.listen(port, console.log(`active port on ${port}`));