// add modules or dependencies
import mongoose from "mongoose";
const moment = require("moment");

// add schema or variable
const Schema = mongoose.Schema;

// define report post schema
const ReportPostSchema = new Schema({
    createdAt: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    },

    updated_at: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    }
});

// export module and create report posts table
export default mongoose.model("report_posts", ReportPostSchema);
