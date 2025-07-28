const mongoose = require("mongoose");

const database_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        uppercase: true,
        unique: true
    },
    subject: {
        type: String,
        required: true
    }
});

const user_model = mongoose.model("user", database_schema);

module.exports = { user_model };
