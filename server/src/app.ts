import express, { Application } from "express";
import cors from "cors";
import CorsOptions from "./config/corsOptions";
import taskRoutes from "./routes/taskRoutes";

const app: Application = express();

app.use(cors(CorsOptions));
app.use(express.json());

app.use("./routes", taskRoutes);

export default app;