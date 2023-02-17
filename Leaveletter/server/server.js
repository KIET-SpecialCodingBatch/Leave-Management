const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors')

const app = express();
app.use(cors)
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/leave_letter_approval', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log('Database connected..')
})


const LeaveLetter = require('./leave_letter');

// Get all leave letters
app.get('/leave_letters', (req, res) => {
  LeaveLetter.find({})
    .then(leaveLetters => res.json(leaveLetters))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new leave letter
app.post('/create_leave', async(req, res) => {
  const { employee_name, reason, start_date, end_date, status } = req.body;
  const newLeaveLetter = new LeaveLetter({
    employee_name,
    reason,
    start_date,
    end_date,
    status
  });

  newLeaveLetter
    .save()
    .then(() => res.json('Leave letter added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a leave letter
app.patch('/leave_letters/:id', (req, res) => {
  LeaveLetter.findById(req.params.id,req.body)
    .then(leaveLetter => {
      leaveLetter.employee_name = req.body.employee_name;
      leaveLetter.reason = req.body.reason;
      leaveLetter.start_date = req.body.start_date;
      leaveLetter.end_date = req.body.end_date;
      leaveLetter.status = req.body.status;

      leaveLetter
        .save()
        .then(() => res.json('Leave letter updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a leave letter
app.delete('/leave_letters/:id', (req, res) => {
  LeaveLetter.findByIdAndDelete(req.params.id)
    .then(() => res.json('Leave letter deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
