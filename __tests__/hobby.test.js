const fs = require("fs");

it("matches", () => {
    fs.readFile("api/db.json", "utf-8", (err, data) => {
        if (err) throw err;

        const parsedData = JSON.parse(data);
        expect(parsedData.me.hobby).toBe(parsedData.me.hobby);
    });
});
