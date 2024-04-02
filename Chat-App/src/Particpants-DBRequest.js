const { MongoClient, ObjectID, ServerApiVersion } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://bob:pass@nodeexpressprojects.nwkgstn.mongodb.net/?retryWrites=true&w=majority&appName=nodeExpressProjects";
const dbName = 'ChatApp';
const collectionName = 'particapants';

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectAndReturnCollection() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
}

async function readOneDocument(id) {
  const collection = await connectAndReturnCollection();
  const document = await collection.findOne({ _id: new ObjectID(id) });
  return document;
}

async function checkIfUserExists(username) {
  const collection = await connectAndReturnCollection();
  const user = await collection.findOne({ username: `${username}` });
  return !!user; // Returns true if user exists, false otherwise
}

async function insertOneDocument(data) {
  const collection = await connectAndReturnCollection();
  const result = await collection.insertOne(data);
  return result.insertedId;
}

async function updateOneDocument(id, updateData) {
  const collection = await connectAndReturnCollection();
  const result = await collection.updateOne(
    { _id: new ObjectID(id) },
    { $set: updateData }
  );
  return result.modifiedCount > 0;
}

async function deleteOneDocument(id) {
  const collection = await connectAndReturnCollection();
  const result = await collection.deleteOne({ _id: new ObjectID(id) });
  return result.deletedCount > 0;
}

async function readAllDocuments() {
  const collection = await connectAndReturnCollection();
  const documents = await collection.find().toArray();
  return documents;
}

const readalldocs = async ()=>{
  const docs = await readAllDocuments()
  console.log(docs)

} 


module.exports = { readOneDocument, readAllDocuments, checkIfUserExists, insertOneDocument, updateOneDocument, deleteOneDocument, readalldocs };


