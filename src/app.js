import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
const app = express();

// View Engine
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// Routes
app.use(indexRoutes);

export default app;
