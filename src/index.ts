import express, { application } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`John is super handsomeeee`);
});

app.get("/port", (req, res) => {
  res.send(`LOG: this test is the process.env ${process.env.PORT}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CHANGE listening on PORT: ${PORT}
  `);
});
