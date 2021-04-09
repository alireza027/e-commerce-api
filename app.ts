// add dependencies
import express, { Application, Request, Response } from "express";
// import bodyParser from "body-parser";
// import mongoose from 'mongoose';
import "dotenv/config";

// create instance
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
      console.log("Alireza");
      res.send(process.env.PORT);
});

// use experss
app.listen(5001, () => {
      console.log("Listening On 5001 PORT");
});
