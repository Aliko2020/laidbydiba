const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Appointment = require('./models/appointment');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const slots = [1, 2, 3];  // Example slots in a day
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function seedDB() {
  for (const day of days) {
    for (const slot of slots) {
      const appointment = new Appointment({ date: day, slot, booked: false });
      await appointment.save();
    }
  }
  console.log('Database seeded with slots');
  mongoose.connection.close();
}

seedDB();
