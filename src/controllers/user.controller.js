const asyncHandler = require("../utils/asyncHandler");
const { createUser, getAllUsers, getUserCount, getUserByPhone, updateUser } = require("../services/user.service");

const createError = (message, statusCode) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
};

exports.create = asyncHandler(async (req, res) => {
  const { name, phoneNo, realAge, bodyAge } = req.body;
  const user = await createUser({ name, phoneNo, realAge, bodyAge });
  res.status(201).json({ success: true, data: user });
});

exports.getAll = asyncHandler(async (req, res) => {
  const users = await getAllUsers();
  res.json({ success: true, data: users });
});

exports.getCount = asyncHandler(async (_req, res) => {
  const count = await getUserCount();
  res.json({ success: true, count });
});

exports.getByPhone = asyncHandler(async (req, res, next) => {
  const user = await getUserByPhone(req.params.phoneNo);
  if (!user) return res.json({ success: false });
  res.json({ success: true, data: user });
});

exports.update = asyncHandler(async (req, res, next) => {
  if ("phoneNo" in req.body) return next(createError("phoneNo cannot be updated", 400));
  const user = await updateUser(req.params.id, req.body);
  if (!user) return next(createError("User not found", 404));
  res.json({ success: true, data: user });
});
