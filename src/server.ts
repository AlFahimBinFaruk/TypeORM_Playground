import express from "express";
import { AppDataSource } from "./data-source";
import BlogRoutes from "./routes/blog";
// initialize app
const app = express();

//middlewares
const middlewares = [express.json(), express.urlencoded({ extended: true })];

app.use(middlewares);

//health route
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API working!!!" });
});

// initialize routes
app.use("/blog", BlogRoutes);

const PORT = 8000;

// initialize db connection
AppDataSource.initialize()
  .then(async () => {
    // start server if data connection is initialized
    app.listen(PORT, () => {
      console.log("Server is running on PORT", PORT);
    });
  })
  .catch((error) => console.log(error));
