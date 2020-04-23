import mongoose from "mongoose";
import { mongoConfig } from "./mongoConfig";
import User from "../schema/user";
import Message from "../schema/message";

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
  console.log(`LOG: trying to connectToMongo `);
  return mongoose.connect(connectionString);
};

const models = { User, Message };

export default models;
