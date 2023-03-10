const mongoose = require("mongoose");
const Log = require("./logger");

module.exports = function () {
    mongoose.connect(process.env.DB_URL, () => {
        Log.info(`Server connected to MongoDB Database (${process.env.DB_URL})...`);
    });
}