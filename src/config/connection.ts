import mongoose from "mongoose";
import { mongoConfig } from "./mongoConfig";
import User from "../models/user";
import Message from "../models/message";

const {
  username,
  password,
  host,
  mongoPort,
  database,
  authenticationDatabase,
} = mongoConfig;
const connectionString = `mongodb://${username}:${password}@${host}:${mongoPort}/${database}?authSource=${authenticationDatabase}`;

export const connectToMongo = (): any => {
  try {
    console.log(`\n LOG: Mongo Connection Success to ${connectionString}`);
    return mongoose.connect(connectionString);
  } catch (error) {
    console.log("LOG: connectToMongo -> error", error);
  }
};

const models = { User, Message };
export default models;
