const mongoose = require('mongoose');

const LeaveLetterSchema = new mongoose.Schema({
  employee_name: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
    
  },
  end_date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('LeaveLetter', LeaveLetterSchema);
