const Account = require("../models/Account");
const expressAsyncHandler = require("express-async-handler");
const { getQuery } = require("../utils/queryReq");

const createAccount = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const account = new Account(req.body);
  await account.save();

  return res.json({
    status: "success",
    data: account,
    message: "add user success",
  });
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  return res.json({
    status: "success",
    data: account,
    message: "delete user success",
  });
});

const updateUser = expressAsyncHandler(async (req, res) => {
  const account = await Account.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );

  return res.json({
    status: "success",
    data: account,
    message: "update  user success",
  });
});

const getAllUser = expressAsyncHandler(async (req, res) => {
  const { pageIndex, pageSize, search } = getQuery(req);
  const [accounts, docCount] = await Promise.all([
    Account.find({ userName: search })
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize),
    Account.count({ userName: search }),
  ]);
  return res.json({
    status: "success",
    data: {
      pageIndex,
      pageSize,
      accounts,
      totalPage: Math.ceil(docCount / pageSize),
    },

    message: "query user success",
  });
});

module.exports = {
  createAccount,
  deleteUser,
  updateUser,
  getAllUser,
};
