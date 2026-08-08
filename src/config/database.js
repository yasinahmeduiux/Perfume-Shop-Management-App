const mongoose = require('mongoose');
module.exports = async () => {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required. Copy .env.example to .env and set it.');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');
};
