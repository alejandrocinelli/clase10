import express from "express";
import { json, urlencoded } from 'express';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routes from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");

app.use("/", routes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
}   );

export default app;
