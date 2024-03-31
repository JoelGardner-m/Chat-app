const { MongoClient, ServerApiVersion, Collection} = require('mongodb');
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
const insertOne = async (database,  collection, document) =>{
  return client.db(database).collection(collection).insertOne(document)

}

//insertOne('ChatApp', 'particapants', {firstName: 'bob', lastName:'gaurd', username: 'bobgen', password:"bobgengaurd", images:[]})


//
//read one         
const readOne = async (database,  collection, filter, log = false) =>{
  if (log) {
    
    return client.db(database)
    .collection(collection)
    .findOne(filter)
    .then((req)=> console.log(req)) 
  }
    
    return client.db(database)
    .collection(collection)
    .findOne(filter)
   

}

const readAll = async (database,  collection, filter, log = false) =>{
  if (log) {
    
    return client.db(database)
    .collection(collection)
    .find(filter)
    .then((req)=> console.log(req)) 
  }
    
    return client.db(database)
    .collection(collection)
    .find(filter)
   

}



//update
const updateOne = async (database,  collection, filter, operater, changeValues)  =>{
  client.db(database)
  .collection(collection)
  .updateOne(filter, { [operater] : changeValues})
  
}



//delete
const deleteOne = async (database,  collection, filter) =>{
  return client.db(database)
  .collection(collection)
  .deleteOne(filter)

}

module.exports = {insertOne,
                  updateOne,
                  readOne,
                  readAll,
                  deleteOne}

