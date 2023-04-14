const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://juan:nob@cluster0.9wsduos.mongodb.net/reminders?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Could not connect to MongoDB Atlas'));

// Define Reminder schema and model
const reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const Reminder = mongoose.model('Reminder', reminderSchema, 'reminders');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Define routes
// app.get('/', async (req, res) => {
//   const reminders = await Reminder.find({});
//   res.render('index', { reminders });
// });

// Home page
app.get('/', function(req, res) {
  res.render('home');
});

// Display single reminder
app.get('/reminders/:id', async (req, res) => {
  const { id } = req.params;
  const reminder = await Reminder.findById(id);
  res.render('reminder', { reminder });
});

// Edit single reminder - display form
app.get('/reminders/:id/edit', async (req, res) => {
  const { id } = req.params;
  const reminder = await Reminder.findById(id);
  res.render('editReminder', { reminder });
});

// Edit single reminder - handle form submission
app.put('/reminders/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  await Reminder.findByIdAndUpdate(id, { title, description, date });
  res.redirect(`/reminders/${id}`);
});

// Delete single reminder
app.delete('/reminders/:id', async (req, res) => {
  const { id } = req.params;
  await Reminder.findByIdAndDelete(id);
  res.redirect('/');
});

// Get all reminders
app.get('/reminders', async (req, res) => {
  const reminders = await Reminder.find({});
  res.render('reminders', { reminders });
});

// Add new reminder - display form
app.get('/addReminder', async (req, res) => {
  res.render('addReminder');
});

// Add new reminder - handle form submission
app.post('/addReminder', async (req, res) => {
  const { title, description, date } = req.body;
  const reminder = new Reminder({ title, description, date });
  await reminder.save();
  res.redirect('/reminders');
});

// Delete reminder
// app.delete('/reminders/:id', async (req, res) => {
//   const { id } = req.params;
//   await Reminder.findByIdAndDelete(id);
//   res.sendStatus(204);
// });


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

