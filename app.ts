// add dependencies
import express, { Application } from "express";
import * as mongoose from "mongoose";
import { json, urlencoded } from "body-parser";
import "dotenv/config";

// add routes

// create instance
const app: Application = express();

// use dependencies
app.use(express.static(__dirname + "/public"));
app.use(
    json({
        inflate: true,
        limit: "100kb",
        type: "application/*",
        verify: () => {
            return true;
        }
    })
);
app.use(urlencoded({ extended: false }));

// use routes

// connect to mongoose
mongoose
    .connect(process.env.MONGO_ADDRESS || "mongodb://localhost:27017/shop", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then()
    .catch();

// use experss
app.listen(5001, () => {
    console.log(`Listening On ${process.env.PORT} PORT`);
});
