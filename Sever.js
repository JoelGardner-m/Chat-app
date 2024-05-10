const express = require('express');
const Cors = require('cors')
const { readOneDocument, readAllDocuments, checkIfUserExists, insertOneDocument, updateOneDocument, deleteOneDocument }= require('./Particpants-DBRequest')
const app = express()

app.use(Cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
  res.status(200).json({message:"hello"})

})

app.get('/api', (req, res) => {
  res.send('accessing api')
})

app.get('/api/users', async (req, res)=>{
  const docs = await readAllDocuments()
  res.status(200).json({docs:docs})


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


app.listen(5000, console.log('active port on 5000'));