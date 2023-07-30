const { db } = require("./app_api/database/models/travlr");

//  .seedgooserc.js
module.exports = {
    modelBaseDirectory: "app_api/database/models", // model directory name
    models: ["*.js", "!db.js"], // model matches
    data: "data", // data directory
    db: "mongodb://localhost:27017/travlr" // db connection url
};