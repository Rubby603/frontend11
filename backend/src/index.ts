import express from "express";
import dotenv from "dotenv";

import routes from "./Routes/indexRoutes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 


app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
