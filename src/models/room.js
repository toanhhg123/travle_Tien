const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  desc: {
    type: String,
  },
  service: [{ type: String }],
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  isBook: {
    type: Boolean,
    default: false,
  },
  hotel: {
    type: mongoose.Types.ObjectId,
    ref: "Hotel",
  },
});

module.exports = mongoose.model("Room", roomSchema);
