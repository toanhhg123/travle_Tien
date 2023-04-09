const expressAsyncHandler = require("express-async-handler");
const Hotel = require("../models/hotels");
const { getQuery } = require("../utils/queryReq");
const createHttpError = require("http-errors");

const getAll = expressAsyncHandler(async (req, res) => {
  const { pageIndex, pageSize, search } = getQuery(req);
  const [hotels, docCount] = await Promise.all([
    Hotel.find({ name: search })
      .populate("address")
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize),
    Hotel.count({ name: search }),
  ]);

  return res.json({
    status: "success",
    data: {
      pageIndex,
      pageSize,
      hotels,
      totalPage: Math.ceil(docCount / pageSize),
    },

    message: "query hotel success",
  });
});

const create = expressAsyncHandler(async (req, res) => {
  const hotel = new Hotel(req.body);
  await hotel.save();

  return res.json({
    status: "success",
    data: hotel,
    message: "query hotel success",
  });
});

const findById = expressAsyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  return res.json({
    status: "success",
    data: hotel,
    message: "query hotel success",
  });
});

const update = expressAsyncHandler(async (req, res) => {
  const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.json({
    status: "success",
    data: hotel,
    message: "query hotel success",
  });
});

const remove = expressAsyncHandler(async (req, res) => {
  const hotel = await Hotel.findByIdAndDelete(req.params.id);

  return res.json({
    status: "success",
    data: hotel,
    message: "query hotel success",
  });
});

const addComent = expressAsyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel) throw createHttpError.NotFound("hotel not found");
  hotel.comments.push(req.body);
  await hotel.save();
  return res.json({
    status: "success",
    data: hotel,
    message: "query hotel success",
  });
});

const deleteComment = expressAsyncHandler(async (req, res) => {
  const { id, commentId } = req.params;
  const hotel = await Hotel.findById(id);
  if (!hotel) throw createHttpError.NotFound("hotel not found");
  hotel.comments = hotel.comments.filter(
    (cmt) => cmt._id.toString() !== commentId
  );
  await hotel.save();
  return res.json({
    status: "success",
    data: hotel,
    message: "query hotel success",
  });
});

module.exports = {
  getAll,
  findById,
  update,
  remove,
  create,
  addComent,
  deleteComment,
};
