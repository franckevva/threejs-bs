import mongoose from "mongoose";
import config from "config";

function connect() {
  const dbUri = process.env.DB_URI || config.get("dbUri") as string;

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.info("Database connected");
    })
    .catch((error) => {
      console.error("db error", error);
      process.exit(1);
    });
}

export default connect;
