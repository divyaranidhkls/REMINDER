type Reminder = {
    id: string;
    title: string;
    description: string;
    marked: boolean;
    date: Date;
}

export class ReminderDatabase {
    private reminders: Reminder[] = [];

    // Creates a reminder and stores it.
    createReminder(id: string, title: string, description: string,marked: boolean,date: Date): void {
        const reminder: Reminder = { id, title, description,marked, date };
        this.reminders.push(reminder);
    }

//Mark Reminder as Completed
MarkReminderAsCompleted(id: string): boolean
{     
    const reminder=this.getReminder(id);
     if(reminder!==null)
     {
         reminder.marked=true;
         return true;

     }
     return false;


    }
    UnMarkReminderAsCompleted(id: string): boolean
{     
    const reminder=this.getReminder(id);
     if(reminder!==null)
     {
         reminder.marked=false;
         return true;

     }
     return false;


    }







    // Checks if a given reminder is present based on its id.
    exists(id: string): boolean {
        return this.reminders.some(reminder => reminder.id === id);
    }

    // Returns all reminders stored so far.
    getAllReminders(): Reminder[] {
        return this.reminders;
    }

    // Returns a specific reminder, if present, based on its id; otherwise returns null.
    getReminder(id: string): Reminder | null {
        const reminder = this.reminders.find(reminder => reminder.id === id);
        return reminder || null;
    }

    // Deletes a reminder based on its id.
    removeReminder(id: string): boolean {
        const initialLength = this.reminders.length;
        this.reminders = this.reminders.filter(reminder => reminder.id !== id);
        return this.reminders.length < initialLength; // Returns true if a reminder was removed.
    }
    

    // Updates a given reminder based on its id.
    updateReminder(id: string, title?: string, description?: string,marked?: boolean, date?: Date): boolean {
        const reminder = this.getReminder(id);
        if (!reminder) {
            return false; // Reminder not found.
        }

        if (title !== undefined) reminder.title = title;
        if (description !== undefined) reminder.description = description;
        if (date !== undefined) reminder.date = date;
        if (marked !== undefined) reminder.marked = marked;


        return true; // Reminder updated successfully.
    }
    getAllRemindersMarkedAsCompleted(): Reminder[] {
        return this.reminders.filter(reminder=>reminder.marked=true);


    }
    getAllRemindersNotMarkedAsCompleted(): Reminder[]
    {

        return this.reminders.filter(reminder=>reminder.marked=false);
    }
    getAllRemindersDueByToday(): Reminder[] {
        const today = new Date().toDateString(); // Get today's date as a readable string
    
        return this.reminders.filter(reminder => 
            new Date(reminder.date).toDateString() <= today
        );
    }
    
}


