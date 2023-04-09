"use strict";
const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/book");

const getAll = expressAsyncHandler(async (req, res) => {
  const books = await Book.find({ roomId: req.params.id })
    .populate("userId")
    .populate("roomId");
  return res.json({
    status: "success",
    data: books,
    message: "query book success",
  });
});

const create = expressAsyncHandler(async (req, res) => {
  const book = new Book(req.body);
  await book.save();

  return res.json({
    status: "success",
    data: book,
    message: "query book success",
  });
});

const findById = expressAsyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("userId")
    .populate("roomId");

  return res.json({
    status: "success",
    data: book,
    message: "query book success",
  });
});

const remove = expressAsyncHandler(async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  return res.json({
    status: "success",
    data: book,
    message: "query book success",
  });
});

module.exports = {
  getAll,
  findById,
  remove,
  create,
};
