import express from "express";
import cors from "cors";
import router from "./routes/albumRoutes";

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb", type: "application/json" }));
app.use("/api/v1", router);

export default app;
