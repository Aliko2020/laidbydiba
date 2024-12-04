const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const Appointment = require('./models/appointment');
const cron = require('node-cron');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Seed function
async function seedDB() {
  const slots = [
    { slot: 1, time: '09:00 AM - 10:00 AM', serviceDescription: 'Consultation' },
    { slot: 2, time: '10:00 AM - 11:00 AM', serviceDescription: 'Therapy Session' },
    { slot: 3, time: '11:00 AM - 12:00 PM', serviceDescription: 'Check-up' }
  ];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Clear existing slots
  await Appointment.deleteMany({});
  console.log('Existing slots cleared');

  // Add new slots
  for (const day of days) {
    for (const { slot, time, serviceDescription } of slots) {
      const appointment = new Appointment({ date: day, slot, time, serviceDescription, booked: false });
      console.log('Inserting appointment:', appointment);
      await appointment.save();
    }
  }
  console.log('Database seeded with slots');
}

// Schedule the seed function to run every week (Sunday at midnight)
cron.schedule('0 0 * * 0', () => {
  console.log('Running seed task...');
  seedDB();
});

// Route to get available slots
app.get('/slots', async (req, res) => {
  try {
    const appointments = await Appointment.find({ booked: false });
    res.json(appointments);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Route to book an appointment
app.post('/book', async (req, res) => {
  const { date, slot, service } = req.body;
  try {
    const appointment = await Appointment.findOne({ date, slot });
    if (appointment) {
      if (!appointment.booked) {
        appointment.booked = true;
        appointment.service = service;
        await appointment.save();
        res.send('Appointment booked successfully');
      } else {
        res.status(400).send('Slot already booked');
      }
    } else {
      res.status(404).send('Slot not found');
    }
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.post('/confirm-booking', async (req, res) => {
  const { userInfo, slotInfo } = req.body;
  try {
    const appointment = await Appointment.findOne({ date: slotInfo.date, slot: slotInfo.slot });
    if (appointment) {
      if (!appointment.booked) {
        appointment.booked = true;
        appointment.service = slotInfo.service;
        appointment.user = userInfo; // Store user info if needed
        await appointment.save();
        res.send('Booking confirmed successfully');
      } else {
        res.status(400).send('Slot already booked');
      }
    } else {
      res.status(404).send('Slot not found');
    }
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
