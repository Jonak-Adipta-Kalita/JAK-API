const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

// server.listen(process.env.PORT || 3000, () => {
//     console.log(`Listening PORT: ${process.env.PORT || 3000}`);
// });

module.exports = server;
