import express from "express";
import { json, urlencoded } from 'express';
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { engine } from "express-handlebars";
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

/* app.set("view engine", "pug");
app.set("views", __dirname + "/views.pug");
*/

// seteamos para que se use Handlebars como motor de plantillas 

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: join(__dirname, "./views.hbs/layouts/main.hbs"),
    layoutsDir: join(__dirname, "./views.hbs/layouts"),
    partialsDir: join(__dirname, "./views.hbs/partials"),
  })
);

app.set("view engine", "hbs");
app.set("views", __dirname + "/views.hbs");

app.use("/", routes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
}   );

export default app;
