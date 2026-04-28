const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^\d{12}$/,
        "phoneNo must be a 10-digit number with country code",
      ],
    },
    realAge: { type: Number },
    bodyAge: { type: Number },
    quiz: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
