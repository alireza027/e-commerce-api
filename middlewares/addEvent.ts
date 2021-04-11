// add modules
import fs from "fs";

// define add event function
const addEvent = (id: string, method: string, ip: string, url: string, status_code: number, created_at: string) => {
    var eventObject = { id, method, ip, url, status_code, created_at };

    fs.exists("log.json", (exists) => {
        if (exists == false) {
            fs.writeFileSync("log.json", JSON.stringify([eventObject]));
        } else {
            fs.readFile("log.json", (error, data) => {
                if (error) throw error;

                var allData = JSON.parse(data.toString());

                allData.push(eventObject);

                fs.writeFileSync("log.json", JSON.stringify(allData));
            });
        }
    });
};

// export module
export default addEvent;
