// add dependencies
import express, { Application, Request, Response, NextFunction } from "express";
import { connect } from "mongoose";
import { json, urlencoded } from "body-parser";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "dotenv/config";

// add routes
import AuthRoute from "./routes/auth";
import BookmarkRoute from "./routes/bookmark";
import CategoryRoute from "./routes/category";
import CommentRoute from "./routes/comment";
import CommentLikeDisLikeRoute from "./routes/commentLikeDisLike";
import ConfigRoute from "./routes/config";
import MenuRoute from "./routes/menu";
import MoneyBackMethodRoute from "./routes/moneyBackMethod";
import OrderRoute from "./routes/order";
import PostOrProductRoute from "./routes/post";
import PostLikeDisLikeRoute from "./routes/postLikeDisLike";
import RecentEventRoute from "./routes/recentEvent";
import ReportCommentRoute from "./routes/reportComment";
import ReportPostRoute from "./routes/reportPost";
import RoleRoute from "./routes/role";
import TagRoute from "./routes/tag";
import VideoUploadRoute from "./routes/videoUpload";

// add middlewares
import addEvent from "./middlewares/addEvent";

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

// log data
app.use((req: Request, res: Response, next: NextFunction) => {
    addEvent(uuidv4(), req.method, req.ip, req.url, res.statusCode, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));
    next();
});

// error handling
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message
    });

    next();
});

// rules of our API
app.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
        return res.status(200).json({});
    }
});

// use routes
app.use("/auth", AuthRoute);
app.use("/product", PostOrProductRoute);
app.use("/category", CategoryRoute);
app.use("/menu", MenuRoute);
app.use("/comment", CommentRoute);
app.use("/post-like-dis-like", PostLikeDisLikeRoute);
app.use("/comment-like-dis-like", CommentLikeDisLikeRoute);
app.use("/bookmark", BookmarkRoute);
app.use("/order", OrderRoute);
app.use("/role", RoleRoute);
app.use("/money-back-method", MoneyBackMethodRoute);
app.use("/recent-event", RecentEventRoute);
app.use("/tag", TagRoute);
app.use("/video-upload", VideoUploadRoute);
app.use("/config", ConfigRoute);
app.use("/report-post", ReportPostRoute);
app.use("/report-comment", ReportCommentRoute);

// connect to mongoose
connect(process.env.MONGO_ADDRESS || "mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// use experss
app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening On ${process.env.PORT} PORT`);
});
