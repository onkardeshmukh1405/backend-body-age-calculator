const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected: ${conn.connection.host}`);

  await Promise.all(
    Object.values(mongoose.models).map((model) => model.syncIndexes())
  );
};

module.exports = connectDB;
