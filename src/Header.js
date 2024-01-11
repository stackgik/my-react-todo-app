import { useState } from 'react';

export default function Header({ todos }) {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 100000000);

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="header">
      <div className="date">
        <span className="day">{`${weekdays[date.getDay()]}, ${String(
          date.getDate()
        ).padStart(2, '0')}`}</span>
        <span className="month">{months[date.getMonth()]}</span>
      </div>
      <span className="tasks">{`${todos.length} tasks`}</span>
    </div>
  );
}
