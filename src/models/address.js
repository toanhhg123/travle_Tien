const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const addressSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Address", addressSchema);
