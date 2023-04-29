const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const mime = require('mime');

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://juan:nob@cluster0.9wsduos.mongodb.net/reminders?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Could not connect to MongoDB Atlas'));

// Define Reminder schema and model
const reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const Reminder = mongoose.model('Reminder', reminderSchema, 'reminders');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Set up geolocator page
app.get('/geolocator', (req, res) => {
  res.render('geolocator');
});

// Define routes
app.get('/', async (req, res) => {
  const reminders = await Reminder.find({});
  res.render('login', { reminders });
});

// Index - display form
app.get('/index', async (req, res) => {
  res.render('index');
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
  const { title, description, date, lng, lat } = req.body;
  const reminder = new Reminder({
    title,
    description,
    date,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  });
  await reminder.save();
  res.redirect('/reminders');
});

// Delete reminder
app.delete('/reminders/:id', async (req, res) => {
  const { id } = req.params;
  await Reminder.findByIdAndDelete(id);
  res.redirect('/reminders');
});

// Define the login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Hardcoded username and password
  const validUsername = 'owl';
  const validPassword = 'fau2023';

  if (username === validUsername && password === validPassword) {
    // Successful login
    res.redirect('/reminders');
  } else {
    // Failed login
    res.send('Invalid username or password!');
  }
});

// Save location
app.post('/saveLocation', async (req, res) => {
  const { latitude, longitude } = req.body;
  const reminder = await Reminder.findOne({ title: 'Location Reminder' });

  if (reminder) {
    reminder.location.coordinates = [longitude, latitude];
    await reminder.save();
    res.json({ success: true });
  } else {
    // Handle case when the reminder is not found
    res.json({ success: false, message: 'Location reminder not found' });
  }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

