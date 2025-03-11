import {ReminderDatabase} from './reminder';
// Example usage
const db = new ReminderDatabase();
db.createReminder("1", "Buy groceries", "Milk, Eggs, Bread",false, new Date("2025-03-15"));
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