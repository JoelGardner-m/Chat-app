const { MongoClient, ServerApiVersion, } = require('mongodb');
const uri = "mongodb+srv://bob:pass@nodeexpressprojects.nwkgstn.mongodb.net/?retryWrites=true&w=majority&appName=nodeExpressProjects";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const ice = "mint"

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    //list of all data bases
    //const bob = await client.db('admin').admin().listDatabases().then(res=> res.databases)
    //console.log(bob)[]
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const get_collection = async (database)=>{

  const list = client.db(database).listCollections().toArray();

  return list 
}


//insert create
//client.db('jim').collection('bob').insertOne({jim:90})

//read
//client.db('jim').collection('bob').findOne({jim:90}).then((req)=> console.log(req))

//update
//client.db('jim').collection('bob').updateOne({jim:80}, {$set :{jim: 60}})

//delete
//client.db('jim').collection('bob').deleteOne({jim:90})






/*

const express = require('express');

const app = express()

app.use(express.static('./public'))


app.get('/:id', (req, res) => {
   
    console.log(req.params)

})


app.post('/',(req, res) => {
    
    
    
})

app.patch('/:id',(req, res) => {
    res.send(`<p>success</p>`)

})



app.listen(5000, console.log('active port on 5000'));*/