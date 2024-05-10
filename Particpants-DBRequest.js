const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');

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

async function connectAndReturnCollection( collectionName = 'particapants') {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
}

async function readOneDocument(id, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const document = await collection.findOne({ _id: new ObjectId(id) });
  return document;
}

async function checkIfUserExists(username, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const user = await collection.findOne({ username: `${username}` });
  const userid = user
  return {Exist:!!user, ID: userid}; // Returns true if user exists, false otherwise
}

async function insertOneDocument(data, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const result = await collection.insertOne(data);
  return result.insertedId;
}

async function updateOneDocument(id, updateData, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  return result.modifiedCount > 0;
}

async function deleteOneDocument(id, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

async function readAllDocuments(  collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const documents = await collection.find().toArray();
  return documents;
}

async function addToArray(id, fieldName, value, collectionName = 'particapants')  {
  const collection = await connectAndReturnCollection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $push: { [fieldName]: value } }
  );
  return result.modifiedCount > 0;
}

async function removeFromArray(id, fieldName, value, collectionName = 'particapants')  {
  const collection = await connectAndReturnCollection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $pull: { [fieldName]: value } }
  );
  return result.modifiedCount > 0;
}

async function updateInArray(id, fieldName, oldValue, newValue, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const result = await collection.updateOne(
    { _id: new ObjectId(id), [fieldName]: oldValue },
    { $set: { [`${fieldName}.$`]: newValue } }
  );
  return result.modifiedCount > 0;
}

async function removeItemFromArray(id, fieldName, index, collectionName = 'particapants') {
  const collection = await connectAndReturnCollection(collectionName);
  const updateData = { 
    $unset: { [`${fieldName}.${index}`]: 1}
   } // Use the positional operator $ to specify the index of the array element
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    updateData
  );
  return result.modifiedCount > 0;
}


module.exports = { 
  readOneDocument, 
  readAllDocuments, 
  checkIfUserExists, 
  insertOneDocument, 
  updateOneDocument, 
  deleteOneDocument,  
  addToArray,
  removeFromArray,
  removeItemFromArray,
  updateInArray,
  
};


