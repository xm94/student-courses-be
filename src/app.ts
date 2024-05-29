import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import studentRoutes from "./students/studentRoutes";



dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/students',studentRoutes)


app.get("/", (req: Request, res: Response) => {
    res.send("Text");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} ${process.env.DB_HOST} `);
});

export default app;