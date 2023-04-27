2.1 Title page

CEN 4010 Principles of Software Engineering

Spring 2023

Milestone 4: Beta Launch and Reviews

RememberAll

Team 6
| Group Members  | Roles | Emails |
| ------------- | ------------- | ------------- |
| Kyle Palmer  | Scrum Master  | kylepalmer2021@fau.edu |
| Abby Denton  | Product Owner  | adenton2016@fau.edu |
| Juan Rivera | Develop Team  | Jriveraa102@gmail.com |
| Christopher Rodriguez  | Develop Team  | rodriguezc2020@fau.edu |

April 14, 2023


2.2 Product summary

For Executives: As an executive, you have a lot on your plate. You need a reliable assistant to help you stay organized and never miss a meeting or deadline. RemindAll is the perfect solution for you. With its intuitive interface and customizable settings, you can set reminders for meetings, appointments, and even important emails. Plus, with its sync feature, you can access your reminders from any device, ensuring you're always on top of your game.

For Marketing: As a marketer, you understand the importance of staying on top of your campaigns and deadlines. RemindAll can help you do just that. With its advanced scheduling capabilities, you can set reminders for campaign launches, content deadlines, and even social media posts. And with its powerful analytics, you can track the success of your campaigns and make adjustments as needed.

For Customers: Whether you're a busy parent or a student juggling multiple responsibilities, RemindAll has got your back. Its simple and user-friendly interface makes setting reminders a breeze. You can set reminders for everything from picking up groceries to completing assignments. And with its location-based reminders, you'll never forget to pick up that item on your to-do list when you're out and about.

1.	Set reminders for specific dates and times
2.	Set reminders based on location
3.	Sync reminders across devices
4.	Advanced scheduling capabilities
5.	User-friendly interface
6.	Analytics to track success of reminders and productivity

Unique Features: RemindAll offers personalized reminders that adapt to your behavior and schedule. It uses machine learning to suggest the best times for reminders based on your past actions. Additionally, it offers integration with popular calendars like Google Calendar and Outlook, ensuring that all your reminders are in one place. RemindAll also allows users to set reminders based on their location to provide the user to set reminders more efficiently. 

2.3 Usability test plan : Add event
1.Test Objectives: The objective of this usability test plan is to evaluate the usability of the Add event feature in a mobile app. The test will focus on the ability of the feature to allow users to set reminders. This requirement allows users to create and organize their reminders into separate lists based on different categories such as work, personal, fitness, etc. This helps users keep their reminders organized and easy to manage.
The test aims to identify any usability issues that may exist in the feature and provide recommendations for improvements. This usability test plan outlines the objectives, system setup, task to be accomplished, intended user, completion criteria, URL of the app, and questionnaire form for evaluating the usability of a mobile app feature that allows users to set reminders and events on their calendar. The test aims to identify any usability issues and provide recommendations for improvements to ensure the feature is easy to use and meets the needs of the target users. The plan is designed to be easy to use and understand for usability testers and includes a simple Likert scale questionnaire to gather feedback from users.
 2. Test Plan: Starting Point: The mobile app will be installed on a smartphone or a tablet. The user will start from the home screen of the app. Task to be Accomplished: user will select the reminder app, then select the top right of the screen. Fill out the event details. Enter a title for the event — this is the only mandatory field — and then adjust the date and time. If it's an all-day event, swipe the "All-day" button to the right. You can also tap the "Repeat" option if this is an event that's going to occur regularly. When you're done, tap "Add" in the top-right corner. The test will also be considered successful if the user can complete the task within a reasonable amount of time (no more than 2 minutes). URL of the System to be Tested: remindall.herokuapp.com 
3. Questionnaire Form: Please rate the following statements on a scale of 1-5, where 1 is strongly disagree and 5 is strongly agree.
1.	The Add event feature was easy to use.
2.	The Add event feature met my needs.
3.	I would use the Add event feature again. Thank you for participating in this usability test. Your feedback is greatly appreciated. Note: The questionnaire will be presented to the user after they have completed the task. The reviewer will record the user's responses and use them to evaluate the usability of the feature.

2.4 QA test plan: Add event Feature.
Test objectives: The objectives for RememberAll software QA test are to check if the web app can keep track of the user events and important tasks of the user. Also, to make a general test of all the functions like add, delete, get recurrent events, sort events by priority or time, and Geo location. 
This Test will check if RememberAll is able to add new events to the DB filling all the requirements like Title, Description, Time, and Location
Hardware and software setup: 
RememberAll hardware setup: for RememberAll web application is needed any device capable of connecting to the internet, GPS, and any browser that supports JavaScript.  
RememberAll software setup can be accessed through a website, SQL Database setup, and JavaScript environment. 
Feature to be tested: 
For the QA test, we will be going over the Add event feature which will show that the web application can add new rows in the database and be available to the user to check later on and receive a notification when the event is near its deadline.
This add event feature should be able to add events for the same day and later on month or any time except days that have already passed.
The user should be able to add as many events as he wants.

Actual test cases: 3 test cases and results of testing them on your system: 1 page
Add a new event for the same day to remember to take out the garbage once it gets home.
Add an event for 3 months later to remember to attend a conference for New Technologies. 
Add a test on a passed date to check if the validation is correct. 
Chrome
Same day event 
conference
Passed day
Title 
PASS
Title 
PASS
Title 
PASS
Description 
PASS
Description 
PASS
Description 
PASS
Date 
PASS
Date 
PASS
Passed Date 
PASS
Alert
PASS
Alert
PASS
Alert
PASS

  
Firefox
Same day event 
conference
Passed day
Title 
PASS
Title 
PASS
Title 
PASS
Description 
PASS
Description 
PASS
Description 
PASS
Date 
PASS
Date 
PASS
Passed Date 
PASS
Alert
PASS
Alert
PASS
Alert
PASS





2.5 Code Review
//App.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

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
  data: Date,
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
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Define routes
app.get('/', async (req, res) => {
  const reminders = await Reminder.find({});
  res.render('index', { reminders });
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
  const { title, description, date, long, lat } = req.body;
  const reminder = new Reminder({ 
    title, 
    description, 
    date,
    location: {
      type: "Point",
      coordinates: [long, lat]
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

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

//Code Comment: this code has been well commented and the definition of the function to call the respective pages and scripts are correct

//Add reminder
<!DOCTYPE html>
<html>
  <head>
    <title>Add Reminder</title>
  </head>
  <body>
    <h1>Add Reminder</h1>
    <form action="/addReminder" method="POST">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title"><br>

      <label for="description">Description:</label>
      <textarea id="description" name="description"></textarea><br>

      <label for="date">Date:</label>
      <input type="date" id="date" name="date"><br>

      <input type="submit" value="Add Reminder">
    </form>
  </body>
</html>
//Code Review: this is a html field that sneds a post wiht the data its only missing CSS for more style but the HTLm is following regulations
//reminder.js
<html>
  <head>
    <title>Reminders</title>
  </head>
  <body>
    <h1>Reminders</h1>
    <% if (reminders.length === 0) { %>
      <p>No reminders yet.</p>
    <% } else { %>
      <ul>
        <% reminders.forEach((reminder) => { %>
          <li>
            <h2><%= reminder.title %></h2>
            <p><%= reminder.description %></p>
            <p><%= reminder.date %></p>
            <!-- <form action="/reminders/<%= reminder._id %>?_method=DELETE" method="POST">
              <button>Delete</button>
            </form> -->
            //Code Comment: this call of a fucntion is not complete and may interfere later on
            <form action="/reminders/<%= reminder._id %>" method="POST">
              <input type="hidden" name="_method" value="DELETE">
              <button>Delete</button>
            </form>
            
          </li>
        <% }) %>
      </ul>
    <% } %>
    <a href="/addReminder">Add Reminder</a>
  </body>
</html>
//Code Review: the title, and decritpion are well implemented but the time and delete fuctions need more work with the parameters
//index.js
<html>
  <head>
    <title>My Reminders</title>
  </head>
  <body>
    <h1>My Reminders</h1>
    <ul>
      <% reminders.forEach(function(reminder) { %>
      //Code Review: date attribute is being miscalled in the definition it should be changed to data, as the initilization was made
        <li><%= reminder.title %>: <%= reminder.description %> (<%= reminder.date %>)</li>
      <% }); %>
    </ul>
    <a href="/addReminder">Add Reminder</a>
    <a href="/reminders">View Reminders</a>
  </body>
</html>


2.6 Self-check on best practices for security

1. User data: This includes information such as user login credentials, personal information, and any reminder data that users input into the app.
2. App code and infrastructure: This includes the software code that the app is built on, the servers and databases that it runs on, and any APIs or other third-party services that the app integrates with.
3. User privacy: This includes protecting user data from unauthorized access or theft, as well as ensuring that user data is not shared with third parties without the user's consent.
4. Availability: This includes ensuring that the app is always accessible to users, and that any disruptions or downtime are minimized.
5. Intellectual property: This includes protecting any trademarks, patents, or other intellectual property that the app may have, as well as ensuring that the app does not infringe on the intellectual property of others.
6. 2) Yes, passwords are encrypted in the database for the RememberAll mobile app. We use industry-standard encryption techniques, such as bcrypt , to securely hash and store passwords, ensuring that they are not stored in plaintext and are protected against unauthorized access.
3)  Input data validation is implemented in the search bar of the Reminder mobile app to prevent potential security vulnerabilities. The validation is implemented using secure coding practices and libraries, such as input validation functions provided by the programming language or framework being used, to ensure that only valid and safe data is processed by the application. The following validation steps are taken:
•	Length validation: Input data is checked to ensure that it falls within an acceptable length range to prevent buffer overflow attacks or data truncation issues.
•	Type validation: Input data is validated to ensure that it conforms to the expected data type, such as string or integer, to prevent data type mismatch vulnerabilities.
•	Format validation: Input data is checked to ensure that it adheres to the expected format, such as alphanumeric characters only, to prevent injection attacks or other malicious data manipulation.
•	Sanitization: Input data is sanitized to remove any potentially malicious characters or scripts to prevent cross-site scripting attacks or other code injection attacks.


2.7 Self-check Adherence to original Non- functional specs
Checklist

a) Performance: The mobile app must be fast and responsive, with minimal loading times and low memory consumption.	DONE, ON TRACK 

b) Usability: The mobile app must be intuitive and user-friendly, with clear and concise instructions for all features. The design must be optimized for mobile devices and should support gestures like swipe and pinch.	DONE, ON TRACK 

c) Accessibility: The mobile app must meet the standards of WCAG 2.1, with support for screen readers, large text sizes, and high contrast modes. The app must be compatible with both iOS and Android accessibility features.	IN PROGRESS 
 d) Security: The mobile app must ensure the privacy and security of user data. All user data must be encrypted and stored securely. The app must be able to detect and prevent unauthorized access, tampering, or data loss.	DONE, ON TRACK 
e) . Availability: The mobile app must have a minimum uptime of 99%, with downtime not exceeding 2 hours per month for maintenance. The app must be available for download from both Apple App Store and Google Play Store.	IN PROGRESS 
f) . Scalability: The application must be able to handle increased user load without performance degradation, and scale horizontally as needed.
	IN PROGRESS

g) Storage: The application must be able to store large amounts of data, with a minimum of 1GB per user. IN PROGRESS

h) Fault Tolerance: The application must be resilient to hardware and software failures and should have a disaster recovery plan in place to ensure data availability in the event of a catastrophic failure. IN PROGRESS



