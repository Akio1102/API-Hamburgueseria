import { MongoClient } from "mongodb";
import { MONGO_URL } from "../Config/config.js";

export default async function () {
  try {
    const client = new MongoClient(MONGO_URL.MONGO_URL);

    await client.connect();

    console.log("Conexion a MongoDB exitosa");
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "Error al conectar a MongoDB:", error });
  }
}
