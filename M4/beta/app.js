const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/reminders', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB'));

// Define Reminder schema and model
const reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const Reminder = mongoose.model('Reminder', reminderSchema);

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to my reminder app!');
});

// Get all reminders
app.get('/reminders', async (req, res) => {
  const reminders = await Reminder.find({});
  res.render('reminders', { reminders });
});

// Add new reminder
app.post('/reminders', async (req, res) => {
  const { title, description, date } = req.body;
  const reminder = new Reminder({ title, description, date });
  await reminder.save();
  res.redirect('/reminders');
});

// Delete reminder
app.delete('/reminders/:id', async (req, res) => {
  const { id } = req.params;
  await Reminder.findByIdAndDelete(id);
  res.sendStatus(204);
});

// Start server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
