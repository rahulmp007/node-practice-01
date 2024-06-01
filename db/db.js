const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost/testdb";

const connection = mongoose.connect(MONGO_URI, {});

module.exports = connection;
