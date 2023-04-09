const expressAsyncHandler = require("express-async-handler");
const Room = require("../models/room");
const { getQuery } = require("../utils/queryReq");
const createHttpError = require("http-errors");

const getAll = expressAsyncHandler(async (req, res) => {
  const rooms = await Room.find(req.body).populate("hotel");
  return res.json({
    status: "success",
    data: rooms,
    message: "query rooms success",
  });
});

const create = expressAsyncHandler(async (req, res) => {
  const room = new Room(req.body);
  await room.save();

  return res.json({
    status: "success",
    data: room,
    message: "query room success",
  });
});

const findById = expressAsyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  return res.json({
    status: "success",
    data: room,
    message: "query room success",
  });
});

const update = expressAsyncHandler(async (req, res) => {
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.json({
    status: "success",
    data: room,
    message: "query room success",
  });
});

const remove = expressAsyncHandler(async (req, res) => {
  const room = await Room.findByIdAndDelete(req.params.id);

  return res.json({
    status: "success",
    data: room,
    message: "query room success",
  });
});

module.exports = {
  getAll,
  findById,
  update,
  remove,
  create,
};
