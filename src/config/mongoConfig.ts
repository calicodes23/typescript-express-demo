export const mongoConfig = {
  authenticationDatabase: process.env.MONGO_AUTHENTICATION_DATABASE || "admin",
  host: process.env.MONGO_HOST || "localhost",
  mongoPort: process.env.MONGO_PORT || 27018,
  username: process.env.MONGO_USERNAME || "root",
  password: process.env.MONGO_PASSWORD || "rootpassword",
  database: process.env.MONGO_DATABASE || "development",
};
