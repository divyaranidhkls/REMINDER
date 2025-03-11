import {ReminderDatabase} from './reminder';
// Example usage
const db = new ReminderDatabase();
db.createReminder("1", "Buy groceries", "Milk, Eggs, Bread",false, new Date("2025-03-15"));
db.createReminder("1", "Buy groceries", "Milk, Eggs, Bread", false, new Date("2025-03-15"));
db.createReminder("2", "Doctor Appointment", "Visit Dr. Smith at 5 PM", false, new Date("2025-03-12"));
db.createReminder("3", "Meeting with Client", "Discuss project updates", false, new Date("2025-03-10"));
db.createReminder("4", "Pay Electricity Bill", "Due by March 20", false, new Date("2025-03-20"));
db.createReminder("5", "Workout Session", "Gym at 7 AM", false, new Date("2025-03-11"));
db.createReminder("6", "Call Mom", "Weekend catch-up", false, new Date("2025-03-09"));
db.createReminder("7", "Submit Project Report", "Deadline at midnight", false, new Date("2025-03-14"));
db.createReminder("8", "Dentist Appointment", "Routine checkup at 10 AM", false, new Date("2025-03-17"));
db.createReminder("9", "Anniversary Dinner", "Reservation at 8 PM", false, new Date("2025-03-18"));
db.createReminder("10", "Read a Book", "Finish 'Atomic Habits'", false, new Date("2025-03-16"));

console.log(db.getAllReminders());
console.log(db.getReminder("1"));
// console.log(db.exists("1"));
// db.updateReminder("1", "Buy groceries and more", "Milk, Eggs, Bread, Butter",false);
// console.log(db.getReminder("1"));
// db.removeReminder("1");
// console.log(db.getAllReminders());
console.log(db.MarkReminderAsCompleted("1"));
console.log(db.getReminder("1"));
console.log(db.UnMarkReminderAsCompleted("1"));
console.log(db.getReminder("1"));
console.log(db.getAllRemindersMarkedAsCompleted());
console.log(db.getAllRemindersNotMarkedAsCompleted());
console.log(db.getAllRemindersDueByToday());