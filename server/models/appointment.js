const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  slot: { type: Number, required: true },
  time: { type: String, required: true },
  service: { type: String },
  booked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
