const expressAsyncHandler = require("express-async-handler");
const Address = require("../models/address");

const create = expressAsyncHandler(async (req, res) => {
  const address = new Address(req.body);
  await address.save();
  return res.json({
    status: "success",
    data: address,
    message: "query address success",
  });
});

const getAll = expressAsyncHandler(async (req, res) => {
  const address = await Address.find();
  return res.json({
    status: "success",
    data: address,
    message: "query address success",
  });
});

const findById = expressAsyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);
  return res.json({
    status: "success",
    data: address,
    message: "query address success",
  });
});

const update = expressAsyncHandler(async (req, res) => {
  const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json({
    status: "success",
    data: address,
    message: "query address success",
  });
});

const remove = expressAsyncHandler(async (req, res) => {
  const address = await Address.findByIdAndDelete(req.params.id);
  return res.json({
    status: "success",
    data: address,
    message: "query address success",
  });
});

module.exports = {
  getAll,
  findById,
  update,
  remove,
  create,
};
