
// java script assincrono
// await async
// fullfilled
import { MongoClient } from "mongodb";

const URI = 'mongodb+srv://diegoromeroribeirochaves:(colocar a senha) @cluster0.u7ecd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();


// console.log(songCollection);