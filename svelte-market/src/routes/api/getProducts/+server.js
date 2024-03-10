// @ts-nocheck
import { MongoClient, ServerApiVersion } from 'mongodb';

let uri = "mongodb://0.0.0.0:27017/";
let client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

const db = client.db('main');
const collection = db.collection('products');


export async function GET({ url }) {
    await client.connect();
    console.log("Connesso al database");

    // Trova tutti i documenti nella collezione
    let products = await collection.find().toArray();
    console.log("Tutti i prodotti:", products);
	return new Response(JSON.stringify(products));
}

