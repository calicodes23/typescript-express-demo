import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`John is super handsomeeee`);
});

app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CHANGE listening on PORT: ${PORT}
  `);
});

// TODO: after setting up db connection, add a branch called "demo" for the live coding
