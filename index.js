const express = require('express');
const APP_SERVER = express();
const bodyparser = require("body-parser");
APP_SERVER.set("view engine","ejs");

APP_SERVER.use(bodyparser.json());

const hostname = "127.0.0.1";
const port = 3000;

APP_SERVER.use("/",require("./webserver"));
APP_SERVER.use("/api",require("./app"));



APP_SERVER.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
