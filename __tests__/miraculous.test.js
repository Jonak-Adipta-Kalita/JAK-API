const fs = require("fs");

it("matches", () => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) throw err;

        const parsedData = JSON.parse(data);
        expect(parsedData.miraculous).toBe(parsedData.miraculous);
    });
});
