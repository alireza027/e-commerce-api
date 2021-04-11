// add modules or dependencies
import mongoose from "mongoose";
const moment = require("moment");

// add schema or variable
const Schema = mongoose.Schema;

// define config schema
const ConfigSchema = new Schema({
    createdAt: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    },

    updated_at: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    }
});

// export module and create configs table
export default mongoose.model("configs", ConfigSchema);
