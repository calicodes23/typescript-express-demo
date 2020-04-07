import express, { application } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`John is super handsomeeee`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CHANGE listening on PORT: ${PORT}
  `);
});

// TODO: after setting up db connection, add a branch called "demo" for the live coding
