import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';


export const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)
  return (
    <div className='calendar'>
      <h1 className="title">RECENT GAMES </h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
