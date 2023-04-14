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


2.3 Usability test plan
Usability Test Plan: Geo Location 
1.Test Objectives:
Geo Location is the process of locating a device or user's precise physical position is known as GEO location, often referred to as geographic location. Several technologies, including GPS, Wi-Fi, cellular networks, and IP addresses, are used for this. To offer users location-based services and customized content, GEO location is frequently employed in mobile apps and websites. For instance, a mobile app might use GEO location to offer the user messages, directions, or recommendations based on where they are right now.
The objective of this usability test plan is to evaluate the usability of the Geo Location feature in a mobile app. The test will focus on the ability of the feature to allow users to set reminders based on their location, such as reminding them to buy groceries if they are near a supermarket. The test aims to identify any usability issues that may exist in the feature and provide recommendations for improvements. The test also aims to ensure that the feature is easy to use and meets the needs of the target users. The navigation system known as GPS, or "Global Positioning System," uses satellites to pinpoint a person's or object's exact location on Earth. GPS triangulates a user's location based on signals sent out by orbiting satellites using a network of receivers on the ground. To give users precise position information, this technology is frequently employed in mobile devices like smartphones and GPS navigational systems. Many uses for GPS exist, such as navigation, tracking, mapping, and surveying. This usability test plan outlines the objectives, system setup, task to be accomplished, intended user, completion criteria, URL of the app, and questionnaire form for evaluating the usability of a mobile app feature that allows users to set reminders based on their location. The test aims to identify any usability issues and provide recommendations for improvements to ensure the feature is easy to use and meets the needs of the target users. The plan is designed to be easy to use and understand for usability testers and includes a simple Likert scale questionnaire to gather feedback from users.
2. Test Plan:
Starting Point: The user will start from the home screen of the app.
Task to be Accomplished: The user will be asked to set a reminder based on their current location. For example, they will be asked to set a reminder to buy groceries when they are near a supermarket.
Intended User: The intended user for this test is anyone who uses the app and needs to set reminders based on their location.
Completion Criteria: The test will be considered successful if the user can set a reminder based on their location without any assistance or confusion. The test will also be considered successful if the user can complete the task within a reasonable amount of time (no more than 2 minutes).
URL of the System to be Tested: remindall.herokuapp.com
3. Questionnaire Form:
Please rate the following statements on a scale of 1-5, where 1 is strongly disagree and 5 is strongly agree.
1.	The GEO LOCATION feature was easy to use.
2.	The Geo Location feature met my needs.
3.	I would use the Geo Location feature again.
Thank you for participating in this usability test. Your feedback is greatly appreciated.
Note: The questionnaire will be presented to the user after they have completed the task. The reviewer will record the user's responses and use them to evaluate the usability of the feature.





2.4 QA test plan: function Geolocation.
1)	Test objectives: The objectives for RememberAll software QA test is to check if the web app can keep track of the user events and important tasks of the user. Also to make a general test of all the functions like add, delete, get recurrent events, sort events by priority or time, and Geo location. 
This Test will check if RememberAll recognizes when the user is near a location where the user has added an event and send a notification to remind the user about the event or things that it has to do.
2)	Hardware and software setup: max 0.5 page
RememberAll hardware setup: for RememberAll web application is needed any device capable of connecting to the internet, GPS, and any browser that supports JavaScript.  
RememberAll software setup can be accessed through a website, SQL Database setup, and JavaScript environment. 
3)	Feature to be tested: max 0.5 page
For the QA test, we will be going over the Geolocation feature, which is expected to recognize when the user is in or near a location that has been registered in any of the events. 
For example, if the user goes to a grocery store RememberAll will send a notification to the user letting him know that he has a list of items to buy, and it will display a checklist to make sure that the user has completed his shopping. If the user, is only nearby then it will send a notification asking the user if he wants to stop and complete this task and create a list to go over it.
 This feature will use GPS, notification to the user, and a snooze option to check the location again if the user wants to come back later, a timely reminder.  

4)	Actual test cases: 3 test cases and results of testing them on your system: 1 page
1.	Pop up a checklist of items to buy when the user is in a grocery store.
2.	When a user passes near a pharmacy ask the user if he wants to stop and buy the medicine that he needs. If the user selects no, delay until a specific time or the next time he passes by a pharmacy. 
3.	 If the user passes near a UPS store the RememberAll web app will send a notification reminding the user to collect a package.

2.5 Code Review

2.6 Self-check on best practices for security

1. User data: This includes information such as user login credentials, personal information, and any reminder data that users input into the app.
2. App code and infrastructure: This includes the software code that the app is built on, the servers and databases that it runs on, and any APIs or other third-party services that the app integrates with.
3. User privacy: This includes protecting user data from unauthorized access or theft, as well as ensuring that user data is not shared with third parties without the user's consent.
4. Availability: This includes ensuring that the app is always accessible to users, and that any disruptions or downtime are minimized.
5. Intellectual property: This includes protecting any trademarks, patents, or other intellectual property that the app may have, as well as ensuring that the app does not infringe on the intellectual property of others.



