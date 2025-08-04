const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ashapumohan123:Mohan%401981@mohan.i5gtq.mongodb.net/vehicleaid?retryWrites=true&w=majority/edumatrix");
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
