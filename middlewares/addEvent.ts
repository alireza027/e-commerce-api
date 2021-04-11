import fs from "fs";

const addEvent = (id: string, method: string, ip: string, url: string, status_code: number, created_at: string) => {
    var eventObject = { id, method, ip, url, status_code, created_at };

    fs.writeFileSync("../log.json", JSON.stringify(eventObject));

    fs.readFile("../log.json", (err, data) => {
        console.log(data.toString());
    });

    // fs.rm("../log.json", (err) => {
    //     console.log("remove");
    // });
};

// export module
export default addEvent;
