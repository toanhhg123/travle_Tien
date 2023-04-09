const createHttpError = require("http-errors");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomId: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
});

bookSchema.pre("save", async function (next) {
  try {
    const checkIn = this.checkIn;
    const checkOut = this.checkOut;
    if (checkIn > checkOut)
      throw createHttpError.MethodNotAllowed("check in and checkout illegal");
    const booking = await this.constructor
      .findOne({ roomId: this.roomId })
      .populate("userId")
      .populate("roomId")
      .where({
        $or: [
          {
            $and: [
              { checkIn: { $lte: checkIn } },
              { checkOut: { $gte: checkIn } },
            ],
          },
          {
            $and: [
              { checkIn: { $lte: checkOut } },
              { checkOut: { $gte: checkOut } },
            ],
          },
          {
            $and: [
              { checkIn: { $gte: checkIn } },
              { checkOut: { $lte: checkOut } },
            ],
          },
        ],
      });

    if (booking)
      throw createHttpError.MethodNotAllowed("already booked during this time");
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("Book", bookSchema);
