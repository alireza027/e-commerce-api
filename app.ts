// add dependencies
import express, { Application } from "express";
import * as mongoose from "mongoose";
import { json, urlencoded } from "body-parser";
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
