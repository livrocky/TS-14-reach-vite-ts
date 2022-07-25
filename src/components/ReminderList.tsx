import React from 'react';
import Reminder from '../types/reminder';

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <div className='card mt-20'>
      <h2>ReminderList</h2>
      <ul>
        {items.map((item: Reminder) => (
          <li key={item.id}>
            {item.todo} -- {item.completed ? 'Complete' : 'Active'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
