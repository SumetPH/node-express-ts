import express from "express";
import test from "./routes/test";

const app = express();
const port: number = 8000 || process.env.PORT;

app.use(test);

app.get("/", (req, res) => {
  return res.json("Hello World.");
});

app.listen(port, () => console.log(`serve : http://localhost:${port}`));
