import React from 'react';
import Reminder from '../types/reminder';
import ReminderStatus from './ReminderStatus';

interface ReminderListProps {
  items: Reminder[];
  onDeleteReminder: (deleteId: Reminder['id']) => void;
}

function ReminderList({ items, onDeleteReminder }: ReminderListProps) {
  return (
    <div className='card mt-20'>
      <h2>ReminderList</h2>
      <ul>
        {items.map((item: Reminder) => (
          <li key={item.id}>
            {item.todo} --
            <ReminderStatus status={item.completed} />
            <button onClick={() => onDeleteReminder(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// sukurti ReminderStatus komponenta
// gaus props status: boolean
// jei statusas yra true tai generuojam kaip melyno fono elementa
// jeigu status false tai generuojam kaip pilko fono elementa

export default ReminderList;
