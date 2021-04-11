// add modules or dependencies
import mongoose from "mongoose";
const moment = require("moment");

// add schema or variable
const Schema = mongoose.Schema;

// define money back method schema
const MoneyBackMethodSchema = new Schema({
    createdAt: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    },

    updated_at: {
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    }
});

// export module and create money back methods table
export default mongoose.model("money_back_methods", MoneyBackMethodSchema);
