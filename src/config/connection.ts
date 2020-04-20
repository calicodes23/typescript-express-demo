import mongoose from "mongoose";
import { mongoConfig } from "./mongoConfig";

const {
  username,
  password,
  host,
  mongoPort,
  database,
  authenticationDatabase,
} = mongoConfig;
const connectionString = `mongodb://${username}:${password}@${host}:${mongoPort}/${database}?authSource=${authenticationDatabase}`;

export const connectToMongo = () => {
  try {
    console.log(`\n LOG: Mongo Connection Success to ${connectionString}`);
    return mongoose.connect(connectionString);
  } catch (error) {
    console.log("LOG: connectToMongo -> error", error);
  }
};
