const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 3,
  },
  desc: {
    type: String,
  },
  priceRange: {
    type: [Number],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  comments: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
      },
      fullName: String,
      rate: Number,
      comment: String,
    },
  ],
});

module.exports = mongoose.model("Hotel", hotelSchema);
