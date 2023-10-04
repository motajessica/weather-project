import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { getWeather } from './Controllers/weatherController.js';

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
config();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

app.post("/", getWeather);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
