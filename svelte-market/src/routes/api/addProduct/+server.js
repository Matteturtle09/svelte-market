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


export async function POST({ request, cookies }) {
    await client.connect();
    console.log("Connesso al database");
    let content = await request.json();
    collection.insertOne(content);
	return new Response(JSON.stringify({status: success, message : "Product Added"}));
}