const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\d{12}$/, "phoneNo must be a 10-digit number with country code"],
    },
    realAge: { type: Number, required: true },
    bodyAge: { type: Number, required: true },
    quiz: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
