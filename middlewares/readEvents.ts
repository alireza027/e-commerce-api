// add modules
import fs from "fs";

// define read event
const readEvents = () => {
    var data = fs.readFileSync("log.json");
    var parseData = JSON.parse(data.toString());
    return parseData;
};

// export module
export default readEvents;
