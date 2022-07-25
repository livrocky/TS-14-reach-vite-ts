import React from 'react';
import Reminder from '../types/reminder';
import reminderStatus from '../types/reminderStatus';
interface ReminderStatusProps {
  status: boolean;
}

function ReminderStatus(props: ReminderStatusProps): JSX.Element {
  if (props.status) {
    return <span className='r-done'>Completed</span>;
  }
  return <span className='r-active'>Active</span>;
}

export default ReminderStatus;
