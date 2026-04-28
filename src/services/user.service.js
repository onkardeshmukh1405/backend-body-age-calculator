const User = require("../models/user.model");

const createUser = (data) => User.create(data);

const getAllUsers = () => User.find();

const getUserCount = () => User.countDocuments();

const getUserByPhone = (phoneNo) => User.findOne({ phoneNo });

const updateUser = (id, data) =>
  User.findByIdAndUpdate(id, { $set: data }, { returnDocument: "after", runValidators: true });

module.exports = { createUser, getAllUsers, getUserCount, getUserByPhone, updateUser };
