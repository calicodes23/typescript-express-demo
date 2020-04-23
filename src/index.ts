import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import models, { connectToMongo } from "./config/connection";
import createUserWithMessage from "./seed";

// reinitializing data with seeded data on start
const eraseDatabaseOnSync = true;

connectToMongo()
  .then(async () => {
    console.log(`\n
    n CONNECTION IN SERVER LOG: setting up connection inside app`);

    // deleting on reinitializing
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({}),
        models.Message.deleteMany({}),
      ]);
      // seeding
      createUserWithMessage();
    }

    // creating express server
    console.log(`LOG: creating the app`);
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      res.send(`John is super CUTE`);
    });

    app.use("/", routes);

    const PORT = process.env.PORT || 5000;

    // listening on port, open 5001 if running on docker
    app.listen(PORT, () => {
      console.log(`\n Listening on PORT: ${PORT}
    `);
    });
  })
  // Todo: define type of err
  .catch((err: any) =>
    console.error(`LOG: Server -> connectToMongo -> err`, err)
  );
