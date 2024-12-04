const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
dotenv.config();
const dbUrl = process.env.DBURL;

const connectDB = async () => { 
  try {
    await mongoose.connect(dbUrl, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); 
  }
};

module.exports = connectDB;