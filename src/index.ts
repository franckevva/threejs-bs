import express from "express";
import config from "config";
import cors from "cors";
import { json } from "body-parser";

import { sceneRouter } from "./routes/scene";
import connect from "./db/connect";

const port = config.get("port") as number;
const host = config.get("host") as string;
const allowedOrigins = ["http://localhost:8081"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(cors(options));
app.use(json());

const path = __dirname + "/views/";
app.use(express.static(path));

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use(sceneRouter);

connect();

app.listen(port, host, () => {
  console.log(`server is listening on port: ${host}//:${port}`);
});
