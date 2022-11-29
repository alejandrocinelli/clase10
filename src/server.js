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

// seteamos para que use ejs como motor de plantillas
/*
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");
*/

// seteamos para que use pug como motor de plantillas

app.set("view engine", "pug");
app.set("views", __dirname + "/views.pug");

app.use("/", routes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
}   );

export default app;
