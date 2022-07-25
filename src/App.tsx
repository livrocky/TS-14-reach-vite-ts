import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import reminderService from './services/ReminderService';
import Reminder from './types/reminder';

// const initReminders: Reminder[] = [
//   { id: 1, todo: 'Game on Sunday', completed: false, userId: 5 },
//   { id: 2, todo: 'Call about the House', completed: true, userId: 5 },
// ];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  async function loadReminders() {
    const rems = await reminderService.getReminders();
    console.log('rems ===', rems);
    setReminders(rems);
  }

  return (
    <div className='container'>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
