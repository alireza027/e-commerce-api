// add modules or dependencies
import mongoose from "mongoose";
const moment = require("moment");

// add schema or variable
const Schema = mongoose.Schema;

// define comment like dis like schema
const CommentLikeDisLikeSchema = new Schema({
    createdAt: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    },

    updated_at: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    }
});

// export module and create comments likes dis likes table
export default mongoose.model("comments_likes_dis_likes", CommentLikeDisLikeSchema);
