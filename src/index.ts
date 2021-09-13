import express from "express";
import config from "config";
import { json } from "body-parser";

import { sceneRouter } from "./routes/scene";
import connect from "./db/connect";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(json());
app.use(sceneRouter);

connect();

app.listen(port, host, () => {
  console.log("server is listening on port " + host + port);
});
