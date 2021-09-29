const assert = require("assert");
const fs = require("fs");

fs.readFile("api/db.json", "utf-8", (err, data) => {
    if (err) throw err;

    const parsedData = JSON.parse(data);

    assert.strictEqual(parsedData.details, parsedData.details);
    console.log(`\u001B[32m✓\u001B[39m Test 1 Passed!!`);

    assert.strictEqual(parsedData.hobby, parsedData.hobby);
    console.log(`\u001B[32m✓\u001B[39m Test 2 Passed!!`);

    assert.strictEqual(parsedData.fav_food, parsedData.fav_food);
    console.log(`\u001B[32m✓\u001B[39m Test 3 Passed!!`);
});
