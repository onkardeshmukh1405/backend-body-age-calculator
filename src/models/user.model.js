const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    realAge: { type: Number },
    bodyAge: { type: Number },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
