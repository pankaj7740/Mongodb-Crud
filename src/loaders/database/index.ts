import * as mongoDb from "mongodb"
import * as dotenv from "dotenv"

import {collections} from "../../services/index"
dotenv.config();
export async function connectToDatabase() {
   
    const client : mongoDb.MongoClient = new mongoDb.MongoClient("mongodb://localhost:27017");
    await client.connect()
    const db :mongoDb.Db= client.db("Allproducts");
    const productsCollection:mongoDb.Collection = db.collection("products");
    collections.products=productsCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${productsCollection.collectionName}`); 
}

